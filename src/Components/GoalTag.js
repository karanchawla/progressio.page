import React from "react";
import ReactTooltip from "react-tooltip";

const GoalTag = props => {
    const prog = props.progress;
    return (
        <div key={props.goal} className={prog} data-tip={props.status}>
            {props.goal}{" "}
        </div>
    );
};

export default GoalTag;
