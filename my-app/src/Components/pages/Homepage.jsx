import React from "react";
import Navbar1 from "../Navbar1";
import Footer from "../Footer";
import Homepage1stcomponent from "../Homepage1stcomponent"
import Homepage2stcomponent from "../Homepage2stcomponent"
import Homepage3rdcomponent from "../Homepage3rdcomponent"

const Homepage = () => {
    return (
        <div>
            <Navbar1/>
            <Homepage1stcomponent/>
            <Homepage3rdcomponent/>
           < Homepage2stcomponent />
            <Footer/>
        </div>
       
    )

}
export default Homepage 