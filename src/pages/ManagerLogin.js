import React, { useState } from "react";
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

function ManagerLogin() {
  const navigate = useNavigate();
  const initialValues = { managerid: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  const navigateToManagerHomePage = () => {
    navigate("/manager-home-page");
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
        textAlign="center"
      >
        <div className="d-flex align-items-center justify-content-center">
          <Grid>
            <Card style={{ maxWidth: 450, padding: "20px 5px" }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Manager Login
                </Typography>

                <form className="mt-3" onSubmit={handleSubmit}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        type="text"
                        placeholder="Enter Id"
                        label="Manager Id"
                        name="managerid"
                        variant="outlined"
                        value={formValues.managerid}
                        onChange={handleChange}
                        required
                      />
                      {/* <input
                        type="text"
                        name="managerid"
                        placeholder="User Id"
                        value={formValues.managerid}
                        onChange={handleChange}
                      /> */}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        placeholder="Enter Password"
                        label="Password"
                        type="password"
                        name="password"
                        variant="outlined"
                        autoComplete="current-password"
                        value={formValues.password}
                        onChange={handleChange}
                        required
                      />
                      {/* <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formValues.password}
                        onChange={handleChange}
                      /> */}
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        required
                      >
                        Sign In
                      </Button>
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

export default ManagerLogin;
