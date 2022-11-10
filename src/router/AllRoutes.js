import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ForgotPassword from "../pages/ForgotPassword";
import Payment from "../pages/Payment";
import UserCart from "../pages/UserCart";
import UserHomePage from "../pages/UserHomePage";
import UserLogin from "../pages/UserLogin";
import UserOrderHistory from "../pages/UserOrderHistory";
import UserProfile from "../pages/UserProfile";
import UserRegister from "../pages/UserRegister";
import AdminLogin from "../pages/AdminLogin";
import AdminHomePage from "../pages/AdminHomePage";
import ChangePassword from "../pages/ChangePassword";
import AdminAddProduct from "../pages/AdminAddProduct";

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/user-cart" element={<UserCart />} />
        <Route path="/user-home-page" element={<UserHomePage />} />
        <Route path="/" element={<UserLogin />} />
        <Route path="/user-order-history" element={<UserOrderHistory />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-home-page" element={<AdminHomePage />} />
        <Route path="/admin-add-products" element={<AdminAddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
