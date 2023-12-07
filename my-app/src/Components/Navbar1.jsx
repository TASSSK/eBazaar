import React, { useState } from "react";
import "./Navbar1.css";
import logo from "./Assets/icon.png";
import logo12 from "./Assets/User.png";

const Navbar1 = () => {
    const [userBoxVisible, setUserBoxVisible] = useState(false);

    const toggleUserBox = () => {
        setUserBoxVisible(!userBoxVisible);
    };

    return (
        <div>
            <nav className="navbar1">
                <div className="navbarlogo navbar-center">
                    <img src={logo} width={30} alt="Logo" />
                </div>
                <div className="navbartext1">eBAZAAR</div>
                <span className="logo12" onClick={toggleUserBox}>
                    <img src={logo12} width={32} height={32} alt="User Icon" />
                </span>
                {userBoxVisible && (
                    <div className="userbox">
                       <a href="/Order"> <p className="myor">My Orders</p></a>
                       <a href="/"> <p className="mylo">Logout</p></a>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar1;
