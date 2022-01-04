import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Layout/Header";
import Home from "./components/Pages/Home";
import Men from "./components/Pages/Men";
import Women from "./components/Pages/Women";
import Jewelery from "./components/Pages/Jewelery";
import Electronics from "./components/Pages/Electronics";
import Cart from "./components/Pages/Cart";
import Profile from "./components/Pages/Profile";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop/men" element={<Men />} />
        <Route path="/shop/women" element={<Women />} />
        <Route path="/shop/jewelery" element={<Jewelery />} />
        <Route path="/shop/electronics" element={<Electronics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
