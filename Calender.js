import React from 'react';
import { withStyles, Typography, TableCell } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { connect } from 'react-redux'
import { changeWindowSizeAction } from '../../redux/actions/settingsActions';
import Month from './views/month/month';
import MonthOffset from './views/month/offset';
import WeekHead from './views/week/head';
import WeekBody from './views/week/body';


const styles = theme => ({
    week: {
        height: "100vh",
    },
    weekBody: {
        height: "100vh",
        overflowY: "auto"
    }
});


class Calendar extends React.Component {
    getFullDayBookings = bookings => {
        return bookings.filter(B => B.allDay);
    }
    generateComponent = (variant, props) => {
        switch (variant) {
            case "month":
                return <Month onDayClick={props.onDayClick} onBookingClick={props.onBookingClick} dateNr={props.nr} day={props.day} bookings={this.formatBookings()} />
            case "week":
                return this.generateWeek()
            case "day":
                return null;
            case "agenda":
                return null;
            case "offset":
                return <MonthOffset dateNr={props.nr} variant="month" />
            default:
                return (
                    <TableCell className={props.classes.monthCell}>

                    </TableCell>
                );
        }

    }
    generateWeek = () => {
        return (<div className={this.props.classes.week}>
            <WeekHead bookings={this.formatBookings().filter(E => E.allDay)} />
            <div className={this.props.classes.weekBody}>
                <WeekBody />
            </div>
        </div>)
    }
    formatBookings = () => {
        if (this.props.bookings.length > 0) {
            return this.filterBookings(this.props.bookings, this.props.bookingFilter)
        } else {
            return [];
        }

    }
    filterBookings = (bookings, filter) => {
        if (bookings.length > 0) {
            let notToRender = Object.keys(filter).filter(F => {
                if (!filter[F]) {
                    return F;
                }
            });
            return bookings.filter(E => {
                if (notToRender.length > 0) {
                    if (notToRender.indexOf(E.room) === -1) {
                        return E
                    }
                } else {
                    return E;
                }
            });
        } else {
            return []
        }
    }
    render() {
        return (this.generateComponent(this.props.variant, this.props))
    }

}

const mapDispatchToProps = dispatch => {
    return {
        changeWindowSize: wSize => (dispatch(changeWindowSizeAction(wSize)))
    }
}
const mapStateToProps = state => {
    return {
        windowSize: state.settings.windowSize,
    }
}

export default withWidth()(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Calendar)));