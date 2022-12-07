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
import { toast } from "react-toastify";
import { loginUser } from "../services/user-service";

function UserLogin() {
  const navigate = useNavigate();
  const initialValues = { email: "", password: "" };
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

    loginUser(formValues)
      .then((response) => {
        console.log(response); // response is the data returned from the server
        console.log("success log"); // if the data is returned successfully, then the user is redirected to the login page
        // if (response.status === 200) {        // if the data is returned successfully, then the user is redirected to the login page
        //   navigate("/");
        // }
        toast.success("Login Successful");
        navigate("/user-home-page");
      })
      .catch((error) => {
        // if the data is not returned successfully, then the user is redirected to the login page
        console.log(error);
        console.log("error log");
        toast.error("Invalid Credentials");
      });

    localStorage.setItem("email", formValues.email);
    const email = localStorage.getItem("email");
    console.log(email);
  };

  const navigateToUserForgotPassword = () => {
    navigate("/user-forgot-password");
  };

  const onSubmit = () => {
    console.log("Login");
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
              />onSubmit={(e) => onSubmit(e)}
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

                <form className="mt-3" onSubmit={handleSubmit}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        type="email"
                        placeholder="Enter Email"
                        label="Email"
                        name="email"
                        variant="outlined"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                      />
                      {/* <input
                        type="text"
                        name="userid"
                        placeholder="User Id"
                        value={formValues.userid}
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
                <Button
                  variant="text"
                  className="mt-2"
                  onClick={navigateToUserForgotPassword}
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
