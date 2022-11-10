import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

function LandingPageBar() {
  const navigate = useNavigate();

  const navigateToAdminLogin = () => {
    navigate("/admin-login");
  };

  const navigateToUserLogin = () => {
    navigate("/");
  };

  const navigateToRegisterUser = () => {
    navigate("/user-register");
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className="mt-2 ms-2 me-2">
        <AppBar position="static" sx={{ bgcolor: "#6D6875" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Best Buy
            </Typography>
            <Button color="inherit" onClick={navigateToUserLogin}>
              User Login
            </Button>

            <Button color="inherit" onClick={navigateToAdminLogin}>
              Admin Login
            </Button>
            <Button color="inherit" onClick={navigateToRegisterUser}>
              Register
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default LandingPageBar;
