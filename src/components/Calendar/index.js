import React from "react";
import { Calendar } from "react-calendar";

function Calendar() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center ' }}>
            <Calendar
                tileDisabled={({ date, view }) =>
                    (view === 'month') &&
                    disabledDates.some(disabledDate =>
                        date.getFullYear() === disabledDate.getFullYear() &&
                        date.getMonth() === disabledDate.getMonth() &&
                        date.getDate() === disabledDate.getDate()
                    )}
            />
        </div>
    )
}

export default Calendar;
