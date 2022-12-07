import React, { useState } from "react";
import LandingPageBar from "../components/LandingPageBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { forgotPassword } from "../services/user-service";

function UserForgotPassword() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    answer1: "",
    answer2: "",
    password: "",
  };

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

    forgotPassword(formValues)
      .then((response) => {
        console.log(response); // response is the data returned from the server
        console.log("success log"); // if the data is returned successfully, then the user is redirected to the login page
        // if (response.status === 200) {        // if the data is returned successfully, then the user is redirected to the login page
        //   navigate("/");
        // }
        toast.success("Password Reset Successful");
        navigate("/user-login");
      })
      .catch((error) => {
        // if the data is not returned successfully, then the user is redirected to the login page
        console.log(error);
        console.log("error log");
        toast.error("Invalid Credentials");
      });
  };

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
            <Card style={{ maxWidth: 450, padding: "20px 5px" }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Reset Password
                </Typography>

                <form className="mt-3" onSubmit={handleSubmit}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        type="email"
                        placeholder="Email Id"
                        label="Email Id"
                        name="email"
                        variant="outlined"
                        value={formValues.email}
                        onChange={handleChange}
                        fullWidth
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
                        type="text"
                        placeholder="What is Your Nick Name ?"
                        label="What is Your Nick Name ?"
                        name="answer1"
                        variant="outlined"
                        value={formValues.answer1}
                        onChange={handleChange}
                        required
                        fullWidth
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
                        type="text"
                        placeholder="What is Your Favorite Movie ?"
                        label="What is Your Favorite Movie ?"
                        name="answer2"
                        variant="outlined"
                        value={formValues.answer2}
                        onChange={handleChange}
                        required
                        fullWidth
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
                        fullWidth
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
                        Update Password
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                {/* <Button
                  variant="text"
                  className="mt-2"
                  onClick={navigateToUserForgotPassword}
                >
                  Forgot Password ?
                </Button> */}
              </CardContent>
            </Card>
          </Grid>
        </div>
      </Box>
    </div>
  );
}

export default UserForgotPassword;
