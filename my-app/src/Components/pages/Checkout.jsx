import React from "react";
import Navbar1 from "../Navbar1";
import Footer from "../Footer";
import Checkout1component from "../Checkout1component";
import Checkout2ndcomponent  from "../Checkout2ndcomponent";
import Checkoutdescription from "../Checkoutdescription";


const Checkout = () => {
    return (
        <div>
            <Navbar1/>
            <Checkout1component/>
            <Checkout2ndcomponent/>
            <Checkoutdescription/>
            <Footer/>
        </div>
       
    )

}
export default Checkout