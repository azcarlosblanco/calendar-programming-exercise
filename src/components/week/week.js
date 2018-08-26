import React, { Fragment } from 'react';
import Day from "../day";
import "./index.css";

const Week = ({ date, month, source }) => {

    const days = Array(7)
        .fill()
        .map((item, index) => date.clone().add(index, "d"));

    return (
        <Fragment>
            {
                days.map((day, index) => (
                    <Day
                        key={index}
                        date={day}
                        month={month}
                        source={ source }/>
                ))
            }
        </Fragment>
    );
};

export default Week;
