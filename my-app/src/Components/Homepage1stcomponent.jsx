import React from "react";
import "./Homepage1stcomponent.css"
import xboxpic from "./Assets/image.png"


const Homepage1stcomponent = () => {
    return (
        <div className="container12">
            <div className="container11">
                <p className="sttext">
                THE BEST PLACE TO BUY
                </p>
                <p className="ndtext">
                Electronics
                </p>
                <p className="rdtext">
                Save up to 50% on select electronic items . Get extra $30 cash back on your next purchase.
                </p>
            </div>
            <div className="" ><img  src={xboxpic} width={612.35} height={418.2}/></div>

        </div>
    )

}
export default Homepage1stcomponent 