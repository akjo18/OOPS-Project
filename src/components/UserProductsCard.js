import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "../resources/cart.jpg";
import { useNavigate } from "react-router-dom";

function UserProductsCard(props) {
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
          <Button size="small" variant="contained" onClick={navigateToCart}>
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default UserProductsCard;
