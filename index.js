import React from 'react';
import { withStyles, withWidth, Typography } from '@material-ui/core';
import moment from 'moment';
import {
    weekHeadMaxWidthXl,
    weekHeadMinWidthXl,
    weekHeadMaxWidthLg,
    weekHeadMinWidthLg,
    weekHeadMaxWidthMd,
    weekHeadMinWidthMd,
    weekHeadMaxWidthSm,
    weekHeadMinWidthSm,
    weekHeadMaxWidthXs,
    weekHeadMinWidthXs,
    weekHeadHightXl
} from '../../../util/dimension';
const style = theme => ({
    bodyContainer: {
        display: "flex",
        flexDirection: "row",
        overflow: "auto",
        width: "100%",
    },
    hourContainer: {
        display: "flex",
        flexDirection: "column",
        marginTop: 1,
        [theme.breakpoints.only('xl')]: {
            maxWidth: weekHeadMaxWidthXl,
            minWidth: weekHeadMinWidthXl,
            width: "100%",
        },
        [theme.breakpoints.only('lg')]: {
            maxWidth: weekHeadMaxWidthLg,
            minWidth: weekHeadMinWidthLg,
            width: "100%",
        },
        [theme.breakpoints.only('md')]: {
            maxWidth: weekHeadMaxWidthMd,
            minWidth: weekHeadMinWidthMd,
            width: "100%",
        },
        [theme.breakpoints.only('sm')]: {
            maxWidth: weekHeadMaxWidthSm,
            minWidth: weekHeadMinWidthSm,
            width: "100%",
            backgroundColor: "#"
        },
        [theme.breakpoints.only('xs')]: {
            maxWidth: weekHeadMaxWidthXs,
            minWidth: weekHeadMinWidthXs,
            width: "100%",
        },

    },
    hour: {
        [theme.breakpoints.only('xl')]: {
            maxHeight: "50px",
            height: "46px",
            minHeight: "44px",
        },
        [theme.breakpoints.only('lg')]: {
            maxHeight: "50px",
            height: "46px",
            minHeight: "44px",
        },
        [theme.breakpoints.only('md')]: {
            maxHeight: "50px",
            height: "46px",
            minHeight: "44px",
        },
        [theme.breakpoints.only('sm')]: {
            maxHeight: "50px",
            height: "46px",
            minHeight: "44px",
        },
        borderBottom: "solid 1px #e7e7e7",
        borderLeft: "solid 1px #e7e7e7",
        backgroundColor: "#FFF"
    },
    offset: {
        display: "flex",
        justifyContent: "center",
        paddingTop: 10,
        backgroundColor: "#FFF",
        borderBottom: "solid 1px #e7e7e7",
        borderTop: "solid 1px #e7e7e7",
        [theme.breakpoints.only('xl')]: {
            maxWidth: 55,
            minWidth: 50,
            width: 53,
        },
        [theme.breakpoints.only('lg')]: {
            maxWidth: 53,
            minWidth: 47,
            width: 50,
        },
        [theme.breakpoints.only('md')]: {
            maxWidth: 50,
            minWidth: 43,
            width: 47,
        },
        [theme.breakpoints.only('sm')]: {
            maxWidth: 47,
            minWidth: 38,
            width: 43,

        },
        [theme.breakpoints.only('xs')]: {
            maxWidth: 47,
            minWidth: 43,
            width: 38,
        },
    },
});

const body = props => {
    const { classes } = props;
    let days = [];
    const getHours = () => {
            let hours = [];
            for (let i = 0; i < 24; i++) {
                hours.push(<div key={"hours " + i} className={classes.hour}>
                    <Typography> {i} </Typography>
                </div>)
            }
            return hours
        }
    days.push(<div key="offset" className={classes.offset}></div>)
    for (let j = 0; j < 7; j++) {
        days.push(<div key={"days " + j} className={classes.hourContainer}>
        {getHours()}
        </div>)
    }

    return (<div className={classes.bodyContainer}>
        {days}
    </div>);
}

export default withWidth()(withStyles(style)(body));