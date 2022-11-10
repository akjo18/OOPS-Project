import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

function ManagerBar() {
  const navigate = useNavigate();

  const navigateToManagerHomePage = () => {
    navigate("/manager-home-page");
  };

  const navigateToAddProducts = () => {
    navigate("/manager-add-products");
  };

  const navigateToUserLogin = () => {
    navigate("/");
  };

  const navigateToManagerProfile = () => {
    navigate("/manager-profile");
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className="mt-2 ms-2 me-2">
        <AppBar position="static" sx={{ bgcolor: "#6D6875" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Best Buy
            </Typography>
            <Button color="inherit" onClick={navigateToManagerHomePage}>
              Home
            </Button>
            <Button color="inherit" onClick={navigateToManagerProfile}>
              View Profile
            </Button>
            <Button color="inherit" onClick={navigateToAddProducts}>
              Add Products
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

export default ManagerBar;
