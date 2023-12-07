import React from "react";
import  "./Navbar.css"
import logo from "./Assets/icon.png"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar ">
            <div className="navbarlogo navbar-center" ><img  src={logo} width={30} /></div>
            <div className="navbartext" >eBAZAAR</div>
             </nav>
              </div>
    )

}
export default Navbar 