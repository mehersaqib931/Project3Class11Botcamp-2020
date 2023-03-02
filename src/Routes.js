import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import Navbar from './Components/Navbar';

function RouteConfig() {
  return (
    <div>
    <Router>
    <Navbar/>
        <Routes>

        <Route path = "/" element = {<Home/>}/>
        <Route path = "/About" element = {<About/>}/>
        <Route path = "/Product" element = {<Product/>}/>
        <Route path = "/Product/:id" element = {<ProductItem/>}/>

        </Routes>
    </Router>
    </div>
  )
}

export default RouteConfig
