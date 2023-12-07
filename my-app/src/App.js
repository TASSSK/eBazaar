
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signinpage from "./Components/pages/Signinpage";
import Homepage from "./Components/pages/Homepage";
import Checkout from "./Components/pages/Checkout";
import Ordersucess from "./Components/pages/Ordersucess";
import Order from "./Components/pages/Order";
const App = () => {
    return (
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signinpage />} />
        <Route path='/Homepage' element={<Homepage />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Ordersucess' element={<Ordersucess />} />
        <Route path='/Order' element={<Order/>} />
      </Routes>
    </BrowserRouter>
        
    )
}
export default App




