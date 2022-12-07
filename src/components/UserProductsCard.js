import React from "react";
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
import { addToCart } from "../services/user-service";

function UserProductsCard(props) {
  // var sample = [];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    // setOpen(true);
    let obj = {
      name: props.name,
      price: props.price,
      qty: props.qty,
      id: props.id,
      imgUrl: props.imgUrl,
    };

    console.log(obj);

    addToCart(obj)
      .then((response) => {
        console.log(response);
        console.log("success log");
        toast.success("Product Added Successfully");
        // navigateToAdminHomePage();
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
  const navigateToCart = () => {
    navigate("/user-cart");
  };
  // console.log(props);

  return (
    <div className="">
      <Card sx={{ width: 250 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="150"
          image={props.imgUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price : Rs {props.price} <br /> Qty Available : {props.qty}
          </Typography>
        </CardContent>
        <CardActions className="d-flex justify-content-end">
          {/* <Button size="small" variant="contained" onClick={navigateToCart}>
            Add To Cart
          </Button> */}

          <Button variant="contained" onClick={handleClickOpen}>
            Add To Cart
          </Button>
          {/* <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {props.name} Added To Cart
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

export default UserProductsCard;
