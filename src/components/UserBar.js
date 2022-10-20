import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function UserBar() {
  const navigate = useNavigate();
  const navigateToUserHomePage = () => {
    navigate("/user-home-page");
  };

  const navigateToUserProfile = () => {
    navigate("/user-profile");
  };

  const navigateToCart = () => {
    navigate("/user-cart");
  };

  const navigateToUserLogin = () => {
    navigate("/");
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className="mt-2 ms-2 me-2">
        <AppBar position="static" sx={{ bgcolor: "#6D6875" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Best Buy
            </Typography>
            <Button color="inherit" onClick={navigateToUserHomePage}>
              Home
            </Button>
            <Button color="inherit" onClick={navigateToUserProfile}>
              View Profile
            </Button>
            <Button color="inherit" onClick={navigateToCart}>
              Cart
            </Button>
            <Button color="inherit" onClick={navigateToUserLogin}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default UserBar;
