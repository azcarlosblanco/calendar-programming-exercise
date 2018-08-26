import React from 'react';
import "./index.css";
import * as Holidays from 'date-holidays';

const Day = ({ date, month, source }) => {

    const holidays = new Holidays(source.countryCode, undefined, undefined, { types: ['public'] });

    const isHolidays = holidays.isHoliday(date.toDate());

    const outOfMonth = date.month() != month;

    const outOfRange = date.isBefore(source.startDate) || date.isAfter(source.endDate);

    const getClassName = date => {
        let className = "day";

        if (outOfMonth || outOfRange ) {
            className += ' day-invalid';
        }

        if (isHolidays) {
            className += ' day-holiday';
        }
        if (date.weekday() === 6 || date.weekday() === 0) {
            className += " day-weekend";
        }

        return className;
    };

    return (
        <div className={getClassName(date)}>
            {outOfMonth || outOfRange ? "" : date.format("D")}
        </div>
    );
};

export default Day;
