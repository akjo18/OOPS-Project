import React from "react";
import LandingPageBar from "../components/LandingPageBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { CardContent, Grid, Card, Typography } from "@mui/material";
import { width } from "@mui/system";
import { CenterFocusStrong } from "@mui/icons-material";

function ManagerRegister() {
  const navigate = useNavigate();
  const navigateToManagerLogin = () => {
    navigate("/manager-login");
  };
  return (
    <div>
      <LandingPageBar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 8,
            width: 600,
            height: 550,
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
                  New Manager Register
                </Typography>
                <form className="pt-3">
                  <Grid container spacing={2}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 4 }}>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          className=""
                          id="outlined-basic"
                          label="Name"
                          variant="outlined"
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          id="outlined-basic"
                          label="Manager Id"
                          variant="outlined"
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          id="fullWidth"
                          variant="outlined"
                          required
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          id="outlined-basic"
                          label="Phone Number"
                          variant="outlined"
                          required
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          label="Address"
                          multiline
                          required
                          rows={4}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          className=""
                          id="outlined-basic"
                          label="What Is Your Nick Name ?"
                          variant="outlined"
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          id="outlined-basic"
                          label="What Is Your Favourite Movie ?"
                          variant="outlined"
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="fullWidth"
                          label="Password"
                          type="password"
                          required
                          autoComplete="current-password"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          onClick={navigateToManagerLogin}
                        >
                          Sign Up
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </Box>
    </div>
  );
}

export default ManagerRegister;
