import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);  
        
        this.state = {
            count: 0,
            count2: 1,
        };
    }

    render(){
        const {name, location} = this.props;
        const { count, count2 } = this.state;
        return (
            <div className = "user-card">
                <h1>{count}</h1>
                <h2>{count2}</h2>
                {/* <h2>Name: {this.props.name}</h2> */}
                <button
                 onClick={()=>{
                     // Never Update State Variables Directly
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                    });
                }}
                >
                    Count Increase</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @adityamarch7</h4>
                <h5>Email: vish87717@gmail.com</h5>
            </div>
            );
    }
}

export default UserClass;