import React from "react";
import LandingPageBar from "../components/LandingPageBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

function UserLogin() {
  const navigate = useNavigate();
  const navigateToUserHomePage = () => {
    navigate("/user-home-page");
  };
  const navigateToForgotPassword = () => {
    navigate("/forgot-password");
  };
  return (
    <div>
      <LandingPageBar />

      {/* <div className="d-flex justify-content-center mt-3 ">
            <Stack spacing={4}>
              <h4>User Login</h4>
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

              <Button variant="contained" onClick={navigateToUserHomePage}>
                Sign In
              </Button>
              <Button onClick={navigateToForgotPassword}>
                Forgot Password ?
              </Button>
            </Stack>
          </div> */}
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
        textAlign="center"
      >
        <div className="d-flex align-items-center justify-content-center">
          <Grid>
            <Card style={{ maxWidth: 450, padding: "20px 5px" }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  User Login
                </Typography>

                <form className="mt-3">
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        type="email"
                        placeholder="Enter Id"
                        label="User Id"
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        placeholder="Enter Password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        autoComplete="current-password"
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        required
                        // onClick={navigateToUserHomePage}
                      >
                        Sign In
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                <Button
                  variant="text"
                  className="mt-2"
                  onClick={navigateToForgotPassword}
                >
                  Forgot Password ?
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </Box>
    </div>
  );
}

export default UserLogin;
