import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Header from "./components/Header";
import Cart from "./pages/cart/Cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/single/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
