import React from "react";
import sheets from "../apis/sheets";
import Calendar from "./Calendar";
import UserCard from "./UserCard";
import CalendarHeader from "./CalendarHeader";
import mainLogo from "./logo.png";
import UserDiet from "./UserDiet";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { response: [], responseDiet: [] };
    }

    onTermSubmit = async term => {
        const response = await sheets.get("/Sheet1!A1:G1000", {
            params: {
                key: "AIzaSyAqJe0xtrDC7V4WzGsk6ijynBvkOX5CCzw",
                majorDimension: "COLUMNS"
            }
        });

        this.setState({ response: response.data.values });
    };

    requestDietSheet = async term => {
        const response = await sheets.get("/Sheet2!A1:G1000", {
            params: {
                key: "AIzaSyAqJe0xtrDC7V4WzGsk6ijynBvkOX5CCzw",
                majorDimension: "COLUMNS"
            }
        });

        this.setState({ responseDiet: response.data.values });
    };

    render() {
        if (!this.state.response.length) {
            this.onTermSubmit();
            this.requestDietSheet();

            return (
                <div className='ui container' style={{ marginTop: "40px" }}>
                    <div className='ui text '>
                        <h1 className='ui dividing header'>
                            <img
                                className='ui image'
                                src={mainLogo}
                                style={{ width: "60px" }}
                            />
                            Progress Tracking
                        </h1>

                        <p>
                            Progressio is an application that helps people track
                            their daily progress in learning to code. It pulls
                            data directly from{" "}
                            <a href='https://docs.google.com/spreadsheets/d/11eLK3AhyHKIhRW_NFDpffkEwD79-6UnYn0fafMeoLno/edit#gid=0'>
                                this
                            </a>{" "}
                            Google sheet.
                        </p>
                    </div>
                    <div className='ui divider' />
                    <div className='ui stackable grid'>
                        <div className='ui row'>
                            <div className='sixteen wide column'>
                                <div className='ui active inverted dimmer'>
                                    <div
                                        className='ui text loader'
                                        style={{ marginTop: "25%" }}>
                                        Loading
                                    </div>
                                    <p />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className='ui container' style={{ marginTop: "40px" }}>
                <div className='ui text '>
                    <h1 className='ui dividing header'>
                        <img
                            className='ui image'
                            src={mainLogo}
                            style={{ width: "60px" }}
                        />
                        Progress Tracking
                    </h1>

                    <p>
                        Progressio is an application that helps people track
                        their daily progress in learning to code. It pulls data
                        directly from{" "}
                        <a href='https://docs.google.com/spreadsheets/d/11eLK3AhyHKIhRW_NFDpffkEwD79-6UnYn0fafMeoLno/edit#gid=0'>
                            this
                        </a>{" "}
                        Google sheet.
                    </p>
                </div>
                <div className='ui divider' />
                <div className='ui stackable grid'>
                    <div className='ui row'>
                        <div className='five wide column'>
                            <div>
                                <UserCard
                                    details={this.state.response[5]}
                                    detailValues={this.state.response[6]}
                                />
                            </div>
                        </div>
                        <div className='eleven wide middle aligned column '>
                            <div
                                className='ui raised card'
                                style={{ width: "100%" }}>
                                <CalendarHeader meta={this.state.response[6]} />
                                <div className='image'>
                                    <Calendar values={this.state.response} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ui divider' />
                <div className='ui stackable grid'>
                    <div className='ui row'>
                        <div className='five wide column'>
                            <h2 className='ui header'>Diet Tracking</h2>
                            <h4 className='ui sub header'>Ketogenic Diet</h4>
                            <span>
                                I went on a strict ketogenic diet starting 1st
                                July, and here I track my daily weight over
                                time.{" "}
                            </span>
                        </div>
                        <div className='eleven wide aligned column'>
                            <div className='image'>
                                <UserDiet values={this.state.responseDiet} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
