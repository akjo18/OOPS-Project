import React from "react";
import LandingPageBar from "../components/LandingPageBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function UserRegister() {
  const navigate = useNavigate();
  const navigateToUserLogin = () => {
    navigate("/");
  };
  return (
    <div>
      <LandingPageBar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 10,
            width: 450,
            height: 550,
          },
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Paper elevation={15}>
          <div className="d-flex justify-content-center mt-3 ">
            <Stack spacing={3}>
              <h4>Register New User</h4>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                required
              />
              <TextField
                id="outlined-basic"
                label="Email Id"
                variant="outlined"
                required
              />
              <TextField
                id="outlined-basic"
                label="User Id"
                variant="outlined"
                required
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                required
                autoComplete="current-password"
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                required
              />

              <Button variant="contained" onClick={navigateToUserLogin}>
                Sign Up
              </Button>
            </Stack>
          </div>
        </Paper>
      </Box>
    </div>
  );
}

export default UserRegister;
