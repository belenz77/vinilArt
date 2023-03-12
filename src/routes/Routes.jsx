import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import Detail from "../views/vinilo-detalle/ViniloDetalle"
import Cart from "../views/cart/Cart";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/detalle" element={<Detail />}></Route>     
                <Route path="/cart" element={<Cart />}></Route>    
            </Routes>
        </BrowserRouter>
    );
};

export default Router;