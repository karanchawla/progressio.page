import React from "react";

const CalendarHeader = ({ meta }) => {
    if (!meta) {
        return (
            <div className='content'>
                <div className='right floated meta'>Hours to date:</div>
                <div className='left floated meta'>Start date:</div>
            </div>
        );
    }
    return (
        <div className='content'>
            <div className='right floated meta'>Hours to date: {meta[4]}</div>
            <div className='left floated meta'>Start date: {meta[3]}</div>
        </div>
    );
};

export default CalendarHeader;
