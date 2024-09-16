import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header render");

    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src= {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contac Us</li>
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

