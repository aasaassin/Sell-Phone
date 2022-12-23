import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Product from './components/Product';
import ProductItems from './components/Products';
function RouteConfig() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<ProductItems />} />
                <Route path="products/:id" element={<Product />} />
            </Routes>
        </BrowserRouter >
    );
}

export default RouteConfig;
