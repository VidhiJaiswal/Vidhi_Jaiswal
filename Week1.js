import React from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/calendar/Calendar';
import { withStyles, Typography } from '@material-ui/core';
import moment from 'moment';


const styles = theme => ({

});


const testEvents = [
    { "title": "Test - NotAllDay", "id": 1, "room": "office" },
    { "title": "Test - NotAllDay", "id": 2, "room": "office" },
    { "title": "Test - Cafe", "id": 3, "room": "cafe", "allDay": true, "startDate": moment(), "endDate": moment().add(2, "days") },
    { "title": "Test - NotAllDay", "id": 11, "room": "office" }]



class Week extends React.Component {
    render(){
        return <Calendar variant="week" bookings={testEvents} bookingFilter={this.props.filter}/>
    }
}


const mapStateToPops = state => ({
    currentDate: state.settings.calendarState,
    filter: state.settings.roomsRender,
});

const mapDispatchToProps = dispatch => ({

});

export default withStyles(styles)(connect(mapStateToPops, mapDispatchToProps)(Week));