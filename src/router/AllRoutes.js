import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserForgotPassword from "../pages/UserForgotPassword";
import Payment from "../pages/Payment";
import UserCart from "../pages/UserCart";
import UserHomePage from "../pages/UserHomePage";
import UserLogin from "../pages/UserLogin";
import UserOrderHistory from "../pages/UserOrderHistory";
import UserProfile from "../pages/UserProfile";
import UserRegister from "../pages/UserRegister";
import AdminLogin from "../pages/AdminLogin";
import AdminHomePage from "../pages/AdminHomePage";
import UserChangePassword from "../pages/UserChangePassword";
import AdminAddProduct from "../pages/AdminAddProduct";
import ManagerAddProduct from "../pages/ManagerAddProduct";
import ManagerLogin from "../pages/ManagerLogin";
import ManagerHomePage from "../pages/ManagerHomePage";
import ManagerRegister from "../pages/ManagerRegister";
import ManagerForgotPassword from "../pages/ManagerForgotPassword";
import ManagerProfile from "../pages/ManagerProfile";
import ManagerChangePassword from "../pages/ManagerChangePassword";

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user-forgot-password" element={<UserForgotPassword />} />
        <Route path="/user-change-password" element={<UserChangePassword />} />
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
        <Route path="/manager-login" element={<ManagerLogin />} />
        <Route path="/manager-home-page" element={<ManagerHomePage />} />
        <Route path="/manager-add-products" element={<ManagerAddProduct />} />
        <Route path="/manager-register" element={<ManagerRegister />} />
        <Route path="/manager-profile" element={<ManagerProfile />} />
        <Route
          path="/manager-forgot-password"
          element={<ManagerForgotPassword />}
        />
        <Route
          path="/manager-change-password"
          element={<ManagerChangePassword />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
