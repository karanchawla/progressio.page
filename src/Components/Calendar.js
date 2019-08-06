import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./Calendar.css";
import ReactTooltip from "react-tooltip";
import "./App.css";

const Calendar = props => {
    if (!props.values[0]) {
        return (
            <div>
                <div className='ui icon message'>
                    <i className='notched circle loading icon' />
                    <div className='content'>
                        <div className='header'>Just one second</div>
                        <p>We're fetching that content for you.</p>
                    </div>
                </div>
            </div>
        );
    }

    function getRange(count) {
        return Array.from({ length: count }, (_, i) => i);
    }

    const dates = props.values[0].slice(1);
    const notes = props.values[2].slice(1);
    const progress = props.values[1].slice(1);

    const datesCleaned = [];
    const progressCleaned = new Array(dates.length);
    const notesCleaned = new Array(dates.length);
    dates.map((val, index) => {
        datesCleaned[index] = new Date(val);
    });

    for (var i = 0; i < progressCleaned.length; i++) {
        if (Number(progress[i]) === 0 || Number(progress[i]) === 1) {
            progressCleaned[i] = Number(progress[i]) + 1;
        } else {
            progressCleaned[i] = 0;
        }
    }

    for (var i = 0; i < progressCleaned.length; i++) {
        if (i < notes.length) {
            notesCleaned[i] = notes[i];
        } else {
            notesCleaned[i] = "";
        }
    }

    const startDate = datesCleaned[0];
    const endDate = datesCleaned[datesCleaned.length - 1];
    const values = getRange(datesCleaned.length).map(index => {
        return {
            date: datesCleaned[index],
            count: progressCleaned[index],
            notes: notesCleaned[index]
        };
    });

    return (
        <div
            style={{
                backgroundColor: "#EDF8F5",
                padding: "0.75em",
                borderRadius: "4px"
            }}>
            <CalendarHeatmap
                startDate={startDate}
                endDate={endDate}
                values={values}
                classForValue={value => {
                    if (!value) {
                        return "color-empty";
                    }
                    return `color-progress-${value.count}`;
                }}
                tooltipDataAttrs={value => {
                    return {
                        "data-tip": `${value.notes}`
                    };
                }}
                showWeekdayLabels={true}
            />
            <ReactTooltip />
        </div>
    );
};

export default Calendar;
