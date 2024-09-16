import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    // console.log("Header render");

    // If no dependency array => useEffect is called every render
    // If dependency array is empty = [] => useEffect is called on initial render(just once)
    // [] this is dependency array in useEffect 
    // if dependency array is [btnNameReact] => useEffect called everytime btnNameReact is updated
    useEffect(()=>{
    }, [btnNameReact])

    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src= {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to ="/contact">Contac Us</Link>
                    </li>
                    <li>Cart</li>
                    <button
                       className="Login" 
                       onClick={()=> {
                        btnNameReact === "login" 
                        ? setBtnNameReact("Logout") 
                        : setBtnNameReact("login");
                        }}
                        >
                          {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
  }

  export default Header

