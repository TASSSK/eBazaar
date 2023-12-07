import React from "react";
import "./Homepage3rdcomponent.css"
import computer from "./Assets/pc.png"
import smartphone from "./Assets/smartphone.png"
import headphone from "./Assets/headphone.png"
import accessories from "./Assets/keyboard.png"
import camera from "./Assets/camera.png"
import tv from "./Assets/tv.png"

const Homepage3rdcomponent = () => {
    return (
    <div>
        <p className="text3com"> Shop with Categories </p>
<div className="boxes">
        <div className="pc" ><img  src={computer} width={148} height={148}/> <p className="pctext">Computer & Laptop</p></div>
        <div className="pc" ><img  src={smartphone} width={148} height={148}/> <p className="pctext">SmartPhone</p></div>
        <div className="pc" ><img  src={headphone} width={148} height={148}/> <p className="pctext">Headphones</p></div>
        <div className="pc" ><img  src={accessories} width={148} height={148}/> <p className="pctext">Accessories</p></div>
        <div className="pc" ><img  src={camera} width={148} height={148}/> <p className="pctext">Camera & Photo</p></div>
        <div className="pc" ><img  src={tv} width={148} height={148}/> <p className="pctext">TV & Homes</p></div>
</div>
</div>
    )

}
export default Homepage3rdcomponent 