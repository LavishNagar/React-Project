# Food-Ordering-App

- Fuctional Based Component - Is fuction which return some piece of jsx.
  # syntax 
   - const User = () =>{
    return (
        // JSX
    );
   };

- Class Based Component - Is class which has render method that return piece of jsx.
  # syntax 
   - class ComponentName extends React.Component {
    render() {
      return (
        // some piece of JSX 
      );
    }
   }
   - What is React.Component? It is a class which come from react package.
     import React from "react".

     1. In About.js file we can provide some props and we want to receive it on User.js(Function based Component). 
    
    2. In same About.js props i want to receive it on UserClass (Class Based Component) to reciever props this class will have Constructor.
    # syntax 
      constructor(porps){
        super(props);  you will always write super(props).   why we use it - It sets the stage for how the component will interact with its props throughout its lifecycle, from mounting to unmounting.       
        console.log(props)      // to check on browser console.
      }

# How we create State variable in Class based components.

  # syntax
   class UserClass extends React.Component {
    constructor(props) {
      super(props);

      // useState variable 
      
      this.state = {          //this.state is big state that contain all the state variable
        count: 0,                   count:0,
                                    count2:2,
      };                           
    }
    render() {
      const{count} = this.state;      //Destructure 
      return( 
       <h1>Count:{count}</h1>
       <button>
      );
    }
   }

 # How we update the state variable 
 create a button and by onClick handler it takes a callback function
 <button onClick = {() => {
    this.setState({
      count: this.state.count + 1,          // if i want to update count2:2, write it same on down
                                              count2: this.state.count2 + 1
    });
 }}
 >