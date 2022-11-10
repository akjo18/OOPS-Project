import React from "react";
import UserBar from "../components/UserBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CartCard from "../components/CartCard";

function UserCart(props) {
  return (
    <div>
      <UserBar />
      <CartCard />
    </div>
  );
}

export default UserCart;
