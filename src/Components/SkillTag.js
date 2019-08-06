import React from "react";

const SkillTag = props => {
    return (
        <div key={props.skillName} className={props.skillLevel}>
            {props.skillName}{" "}
        </div>
    );
};

export default SkillTag;
