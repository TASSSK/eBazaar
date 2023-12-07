import React from "react";
import "./Checkout1component.css"
import home from "./Assets/House.png"


const Order1component = () => {
    return (
        <div>
            <nav className="navbarcom ">
                <div className="navbarlogohome navbar-center" ><img src={home} width={20} height={20} /></div>
                <div className="navbartext1com" ><ul className="breadcrumbs">
    <li><a href="/Homepage">Home</a></li>
    <li>Orders</li>
  </ul></div>
            </nav>
        </div>
    )

}
export default  Order1component 
 