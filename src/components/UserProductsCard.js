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

function UserProductsCard(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/user-cart");
  };

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
          <Dialog
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
          </Dialog>
        </CardActions>
      </Card>
    </div>
  );
}

export default UserProductsCard;
