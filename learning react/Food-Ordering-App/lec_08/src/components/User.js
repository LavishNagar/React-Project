import { useState } from "react";


const User = (props) => {
    const [count, setcount] = useState(0);
// const User = ({name}) => {   // Instead of props Also we destructure is like This
    return (
    <div className = "user-card">
        <h1>Count = {count}</h1>
        <button onClick={()=>{
            setcount(count+1)
        }}>Count Increase(fuctional componenet)</button>
        <h2>Name: {props.name}</h2>
        {/* <h2>Name: {name}</h2> */}
        <h3>Location: {props.location}</h3>
        <h4>Contact: @adityamarch7</h4>
        <h5>Email: vish87717@gmail.com</h5>
    </div>
    )
}

// export default User;