import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles/';
import classNames from 'classnames';
import PropTypes from 'prop-types'; 
import Banner from '../containers/Banner';
import Sidebar from '../containers/Sidebar';
import Month from '../containers/Month';
import Week from '../containers/Week';
import './styles.css';
const styles = theme => ({
    DisplayContainer: {
        flex: 1,
        height: "100vh"
    },
    content: {
        height: "100%",
        flex: 3,
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    'content-left': {
        marginLeft: 0,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-left': {
        marginLeft: 240,
    },
});


class Overview extends Component {
    calendarView = () => {
        switch (this.props.calendarType) {
            case "month":
                return <Month />
            case "week":
                return <Week />
            case "day":
                return <div></div>
            case "agenda":
                return <div></div>
            default:
                return <div></div>
        }
    }
    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.DisplayContainer}>
                <div className="Banner">
                    <Banner />
                </div>
                <div>
                    <Sidebar />
                </div>
                <main className={classNames(classes.content, classes[`content-left`], {
                    [classes.contentShift]: this.props.showMenu,
                    [classes[`contentShift-left`]]: this.props.showMenu,
                })}>
                    {this.calendarView()}
                </main>
            </div>
        )
    }
}

Overview.propTypes ={
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        showMenu: state.settings.showMenu,
        calendarType: state.settings.calendarType,
    }
}


export default withStyles(styles)(connect(mapStateToProps)(Overview));