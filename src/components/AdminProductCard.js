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
import { toast } from "react-toastify";
import { deleteProduct } from "../services/manager-service";

function AdminProductCard(props) {
  const handleClickOpen = () => {
    // setOpen(true);
    let obj = {
      name: props.name,
      price: props.price,
      quantity: props.quantity,
      productNumber: props.productNumber,
      imgage: props.image,
    };
    console.log(obj);

    deleteProduct(obj.id)
      .then((response) => {
        console.log(response);
        console.log("success log");
        toast.success("Product Deleted Successfully");
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
      });
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const navigate = useNavigate();
  // const navigateToCart = () => {
  //   navigate("/user-cart");
  // };
  return (
    <div className="">
      <Card sx={{ width: 250 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="150"
          image={Image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price : Rs {props.price} <br /> Qty Available : {props.quantity}
          </Typography>
        </CardContent>
        <CardActions className="d-flex justify-content-end">
          <Button variant="contained" onClick={handleClickOpen}>
            Delete Item
          </Button>
          {/* <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {props.name} is Deleted
            </DialogTitle>

            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog> */}
        </CardActions>
      </Card>
    </div>
  );
}

export default AdminProductCard;
