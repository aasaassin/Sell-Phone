import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/Navbar';
import Product from './components/Product';
import ProductItems from './components/Products';
import Login from "./components/Login/Login";
function RouteConfig() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<ProductItems />} />
                <Route path="login" element={<Login />} />
                <Route path="products/:id" element={<Product />} />
            </Routes>
        </BrowserRouter >
    );
}

export default RouteConfig;
