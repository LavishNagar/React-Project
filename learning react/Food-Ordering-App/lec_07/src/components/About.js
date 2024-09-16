// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props){
        super(props);
    
        console.log("parent contructor")

    }
    componentDidMount() {
        console.log("parent component did mount")
    }
    render(){
        console.log("parent render")
        return ( 
            <div>
                <h1>About class Component</h1>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name={"Sumit Pandey (Class)"} location= {"Gorakhpur"} contact= {"sp458642@gmail.com"}/>
                <UserClass name={"Elon musk (Class)"} location= {"california"} contact= {"em458642@gmail.com"}/>
            </div>
        );
    }
}

export default About;



