import React from "react";
import "./Homepage2stcomponent.css"
import tvpic from "./Assets/tvpic.png"
import arrow from "./Assets/arrow.png"


const Homepage2stcomponent = () => {
    return (
        <div className="container121">
            <div className="container111">
                <p className="ssttext">
                  Mackbook Pro
                </p>
                <p className="nndtext">
                Apple M1 Max chip. 32GB Unified  
                </p>
                <p className="nnndtext1">
                Memory, 1TB SSD Storage
                </p>
                
                <p><a className="homebtn" href="/Checkout"><button className="orderbtn" > SHOP NOW
          <div className="logocontainerbuy" ><img src={arrow}/></div>
        </button></a></p>
                
            </div>
            <div className="" ><img  src={tvpic} width={612.35} height={418.2}/></div>

        </div>
    )

}
export default Homepage2stcomponent 