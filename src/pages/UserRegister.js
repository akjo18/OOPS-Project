import React, { useState } from "react";
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
import { signUp } from "../services/user-service";

function UserRegister() {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    userid: "",
    useremail: "",
    userphonenumber: "",
    useraddress: "",
    securityq1: "",
    securityq2: "",
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

    // signUp(formValues)
    //   .then((response) => {
    //     console.log(response); // response is the data returned from the server
    //     console.log("success log"); // if the data is returned successfully, then the user is redirected to the login page
    //     // if (response.status === 200) {        // if the data is returned successfully, then the user is redirected to the login page
    //     //   navigate("/");
    //     // }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     console.log("error log");
    //   });
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
                  New User Register
                </Typography>
                <form className="pt-3" onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 4 }}>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          type="text"
                          name="username"
                          id="outlined-basic"
                          label="User Name"
                          variant="outlined"
                          value={formValues.username}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          type="text"
                          name="userid"
                          id="outlined-basic"
                          label="User Id"
                          variant="outlined"
                          value={formValues.userid}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          type="email"
                          name="useremail"
                          label="Email Address"
                          id="fullWidth"
                          variant="outlined"
                          value={formValues.useremail}
                          onChange={handleChange}
                          required
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          type="text"
                          name="userphonenumber"
                          id="outlined-basic"
                          label="Phone Number"
                          variant="outlined"
                          value={formValues.userphonenumber}
                          onChange={handleChange}
                          required
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          type="text"
                          name="useraddress"
                          id="outlined-multiline-static"
                          label="Address"
                          multiline
                          required
                          rows={4}
                          value={formValues.useraddress}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          type="text"
                          name="securityq1"
                          className=""
                          id="outlined-basic"
                          label="What Is Your Nick Name ?"
                          variant="outlined"
                          value={formValues.securityq1}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          type="text"
                          name="securityq2"
                          id="outlined-basic"
                          label="What Is Your Favourite Movie ?"
                          variant="outlined"
                          value={formValues.securityq2}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="fullWidth"
                          name="password"
                          label="Password"
                          type="password"
                          value={formValues.password}
                          onChange={handleChange}
                          required
                          autoComplete="current-password"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          type="submit"
                          required
                          color="primary"
                          // onClick={navigateToUserLogin}
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

export default UserRegister;
