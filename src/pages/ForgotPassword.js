import React from "react";
import LandingPageBar from "../components/LandingPageBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, Typography } from "@mui/material";

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
        textAlign="center"
        alignItems="center"
        justifyContent="center"
      >
        <div className="d-flex justify-content-center ">
          <Grid>
            <Card style={{ maxWidth: 600, padding: "20px 5px" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" mb={2}>
                  Reset Password
                </Typography>
                <Grid container rowSpacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="User Id"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-password-input"
                      label="New Password"
                      type="password"
                      required
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained">Update Password</Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </Box>
    </div>
  );
}

export default ForgotPassword;
