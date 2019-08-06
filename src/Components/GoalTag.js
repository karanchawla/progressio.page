import React from "react";

const GoalTag = props => {
    const prog = props.progress;
    return (
        <div
            key={props.goal}
            className={prog}
            data-tip={props.status}
            style={{ cursor: "default" }}>
            {props.goal}{" "}
        </div>
    );
};

export default GoalTag;
