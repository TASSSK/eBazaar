import React from "react";
import "./Checkout2ndcomponent.css"
import tv from "./Assets/tvpic.png"
import cart from "./Assets/cart.png"


const Checkout2ndcomponent = () => {
    return (
        <div className="checktv">
            <div className="tvpic" ><img src={tv} width={616} height={464} /></div>
            <div className="textpictv">
            <p className="textpictv12">2023 Apple MacBook Pro with Apple M2 Chip (13-inch, 16GB RAM,</p>
            <p className="textpictv11">512GB SSD Storage) - Space Gary</p> 
            <p className="textpictv13"> $2000</p> 
            <p>
                <a className="checkoutbtn" href="/Ordersucess"><button className="bynowbutton" > BUY NOW
          <div className="logocontainerbuy" ><img src={cart} width={20} height={20} /></div>
        </button></a>
        </p>
     </div>
     <div className="textpictv14"> 10% OFF</div> 
        </div>
    )

}
export default  Checkout2ndcomponent 
 