import React from 'react';
import moment from "moment";
import "./index.css";

const Calendar = ({ startDate, endDate, countryCode }) => {

    const totalMonths = endDate.diff(startDate, 'month') + 1;
    const startMonth = moment(startDate.clone().startOf('month'));
    const monthsRange = Array(totalMonths)
        .fill(0)
        .map((item, index) => startMonth.clone().add(index, 'months'));

    return (
        <div className="calendar">
            {
                monthsRange.map((date, index) => (
                    <p key={index}>index</p>)
                )
            }
        </div>
    );
};

export default Calendar;
