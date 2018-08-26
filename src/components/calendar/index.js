import React, { Fragment } from 'react';
import "./index.css";
import moment from "moment";
import Month from "../month";

const Calendar = ({ startDate, endDate, countryCode }) => {

    const totalMonths = endDate.diff(startDate, 'month') + 1;
    const startMonth = moment(startDate.clone().startOf('month'));
    const monthsRange = Array(totalMonths)
        .fill(0)
        .map((item, index) => startMonth.clone().add(index, 'months'));

    const source = { startDate, endDate, countryCode };

    return (
        <Fragment>
            {
                monthsRange.map((date, index) => (
                    <Month
                        key={index}
                        date={date}
                        source={ source }/>)
                )
            }
        </Fragment>
    );
};

export default Calendar;
