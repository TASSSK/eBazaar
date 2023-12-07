import React from "react";
import "./Ordersuccess1component.css";
import ring from "./Assets/ring.png";
import right from "./Assets/right.png";
import ringfiller from "./Assets/ringfiller.png";
import square from "./Assets/square.png"
import arrow from  "./Assets/arrow.png"
import downarrow from  "./Assets/downarrow.png"


const Ordersuccess1component = () => {
  return (
    <div className="ordersu">
      <div className="image-container">
        <img src={ring} className="ring-image" />
        <img src={right} className="right-image" />
        <img src={ringfiller} className="right-filler" />
      </div>
      <div className="textorder">
      Your order is successfully place
      </div>
      <div className="textorder1">
      You will receive email confirmation shortly. Thank you.
      </div>
      <div className="btnord">
      <p ><a href="/Homepage"><button className="orderbtn1" > 
          <div className="orderlogo1" ><img className="imgsquare" src={square}/><br />
          <img className="downarrowd" src={downarrow}/><br/><img className="downarrowdd"src={downarrow}/></div> GO TO HOME
        </button></a></p>
        <p><a href="/Order"><button className="orderbtn" > VIEW ORDER
          <div className="logocontainerbuy" ><img src={arrow}/></div>
        </button></a></p>
      </div>
    
    </div>
  );
};

export default Ordersuccess1component;
