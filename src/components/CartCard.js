import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "../resources/cart.jpg";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { Grid4x4 } from "@mui/icons-material";

function CartCard(props) {
  const [quantity, SetQuantity] = useState(props.qty);
  const increement = (event) => {
    SetQuantity(quantity + 1);
    return quantity;
  };
  const decreement = (event) => {
    if (quantity > 0) SetQuantity(quantity - 1);
    return quantity;
  };
  return (
    //  <Box
    //         sx={{
    //           display: "flex",
    //           flexWrap: "wrap",
    //           "& > :not(style)": {
    //             m: 5,
    //             width: 500,
    //             height: 50,
    //           },
    //         }}
    //       >
    //         <Grid container rowSpacing={2} columnSpacing={4}>
    //           <Grid item xs={2}>
    //             {props.itemName}
    //           </Grid>
    //           <Grid item xs={2} >
    //             {props.price}
    //           </Grid>
    //           <Grid item xs={2}>
    //             <Button onClick={decreement}>-</Button>
    //           </Grid>
    //           <Grid item xs={2} >
    //             {quantity}
    //           </Grid>
    //           <Grid item xs={2}>
    //             <Button onClick={increement}>+</Button>
    //           </Grid>
    //           <Grid item xs={2} >
    //             {props.price*quantity}
    //           </Grid>
    //         </Grid>
    //       </Box>
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-75 py-0">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="card rounded-3 mb-4">
              <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <p className="lead fw-normal mb-2">{props.itemName}</p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 ">
                    <h5 className="mb-0">{quantity}</h5>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <p className="lead fw-normal mb-2">{props.price}</p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 ">
                    <h5 className="mb-0">{props.price * quantity}</h5>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 ">
                    <Button variant="contained" color="error">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    /* <section className="h-100" style={{backgroundColor: '#eee'}}>
<div className="container h-100 py-5">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-10">
      <div className="card mb-4">
      <div className="card-body p-4 d-flex flex-row">
      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h5 className="mb-0">Total</h5>
          </div>
      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h5 className="mb-0">$499.00</h5>
          </div>
      </div>
      </div>
      <div className="card">
      <div className="card-body">
        <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
      </div>
      </div>
      </div>
      </div>
      </div> 
      </section> */
  );
}
export var quantity;
export default CartCard;
