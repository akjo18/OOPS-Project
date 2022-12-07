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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 8,
            width: 600,
            height: 550,
          },
        }}
        textAlign="center"
        alignItems="center"
        justifyContent="center"
      >
        <div className="d-flex justify-content-center ">
          <h1>Cart</h1>
        </div>
      </Box>
    </div>
  );
}

export default UserCart;
