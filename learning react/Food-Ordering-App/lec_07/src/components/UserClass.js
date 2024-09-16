import React from "react";
import { useState } from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);    //why we use it - It sets the stage for how the component will interact with its props throughout its lifecycle, from mounting to unmounting.
        
        // this.state = {
        //     count: 0,
        //     count2: 1, 
        // }; 
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                // avatar_url: 
            }
        }
        // console.log(this.props.name + "child contructor")
    }

    async componentDidMount() {
        console.log(this.props.name + "child component did mount");

        //API CALLS
        const data = await fetch()
        const json = data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);

    }

        render() {
        // const {name, location, contact} = this.props;
        // const { count } = this.state
        // const { count2 } = this.state

        const { name, location } = this.state.userInfo;

        console.log(this.props.name + "child render")

            return (
                <div className="user-card">
                    {/* <h1>Count: {count}</h1>
                    <button onClick={() =>{
                        //never update state varaiable directly
                        this.setState({
                            count: this.state.count + 1,
                            count2: this.state.count2 + 2,
                        });
                    }}
                    >
                       Count Increase
                    </button> */}
                    {/* <h2>Count2: {count2}</h2> */}
                    <h2>Name: {name} </h2>
                    <h3>Location: {location} </h3>
                    {/* <h3>Contact: {contact}</h3> */}
                </div>
            );
        }
   
}

export default UserClass;