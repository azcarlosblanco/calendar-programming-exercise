import React from 'react';
import "./index.css";
import Week from "../week/week";

const daysNames = ['S', 'M', 'T', 'W' , 'T', 'F', 'S'];

const Month = ({ date, source }) => {
    //console.log("Month", source.startDate.format());

    const weeks = date => {
        let week = date.clone().startOf("month").startOf("week");
        let weeks = [];

        weeks.push(week.clone());
        week.add(1, "w");

        while (week.month() === date.month() && week.isBefore(source.endDate.clone().add(1, 'd'))) {
            weeks.push(week.clone());
            week.add(1, "w");
        };

        return weeks;
    };

    return (
        <div className="month">

            <div>
                {
                    daysNames.map((day, index) => (
                        <div key={index} className="day-name">
                            {day}
                        </div>
                    ))
                }
            </div>

            <div className="header">{date.format("MMMM YYYY")}</div>

            {
                weeks(date).map((week, index) => (
                    <Week
                        key={index}
                        date={week}
                        month={date.month()}
                        source={ source }
                    />
                ))
            }
        </div>
    );
};

export default Month;
