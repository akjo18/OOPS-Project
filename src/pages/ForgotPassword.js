import React from "react";
import LandingPageBar from "../components/LandingPageBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
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
            m: 15,
            width: 450,
            height: 350,
          },
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Paper elevation={15}>
          <div className="d-flex justify-content-center mt-3 ">
            <Stack spacing={4}>
              <h4>Reset Password</h4>
              <TextField
                id="outlined-basic"
                label="User Id"
                variant="outlined"
                required
              />
              <TextField
                id="outlined-password-input"
                label="New Password"
                type="password"
                required
                autoComplete="current-password"
              />

              <Button variant="contained" onClick={navigateToUserLogin}>
                Update Password
              </Button>
            </Stack>
          </div>
        </Paper>
      </Box>
    </div>
  );
}

export default ForgotPassword;
