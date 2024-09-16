// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props){
        super(props);

        
    }
    render(){
        return ( 
            <div>
                <h1>About class Component</h1>
                <h2>This is Namaste React Web Series</h2>
                {/* <User name={"Adity Pandit (Fuction)"} location= {"Ayodhya"}  />/ */}
                <UserClass name={"Sumit Pandey (Class)"} location= {"Gorakhpur"}/>
            </div>
        );
    }
}



export default About;