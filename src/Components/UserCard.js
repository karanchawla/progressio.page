import React from "react";
import "./App.css";
import ReactTooltip from "react-tooltip";
import GoalTag from "./GoalTag";
import SkillTag from "./SkillTag";

const UserCard = props => {
    if (!props.details) {
        return (
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='six wide column'>
                        <img />
                    </div>
                </div>
                <div className='row'>
                    <div className='twelve wide column'>
                        <h2 className='ui header' />
                    </div>
                </div>
            </div>
        );
    }

    const details = props.details.slice(1);
    const values = props.detailValues.slice(1);
    var skills = [];
    var goals = [];
    for (var i = 7; i < 12; i++) {
        skills.push(<SkillTag skillName={details[i]} skillLevel={values[i]} />);
    }

    for (var j = 20; j < 23; j++) {
        goals.push(
            <GoalTag
                goal={details[j]}
                progress={values[j]}
                status={values[j]}
            />
        );
    }

    return (
        <div className='ui grid'>
            <div className='ui row'>
                <div className='six wide column'>
                    <img
                        src={values[0]}
                        style={{
                            borderRadius: "50%",
                            marginTop: "10px"
                        }}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='twelve wide column'>
                    <h2 className='ui header'>{values[1]}</h2>
                </div>
            </div>
            <div className='row'>
                <div className='sixteen wide column'>{skills}</div>
            </div>
            <div>
                <h4 className='ui header'> Current Goals</h4>
            </div>
            <div className='row'>
                <div className='sixteen wide column'>{goals}</div>
            </div>
            <ReactTooltip />
        </div>
    );
};

export default UserCard;
