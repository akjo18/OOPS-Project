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
import { managerSignUp } from "../services/manager-service";
import { toast } from "react-toastify";

function ManagerRegister() {
  const navigate = useNavigate();

  const initialValues = {
    managerName: "",
    managerId: "",
    managerPhoneNumber: "",
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

    managerSignUp(formValues)
      .then((response) => {
        console.log(response); // response is the data returned from the server
        console.log("success log"); // if the data is returned successfully, then the user is redirected to the login page
        // if (response.status === 200) {        // if the data is returned successfully, then the user is redirected to the login page
        //   navigate("/");
        // }
        toast.success("Manager Registration Successful");
        navigate("/manager-login");
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
      });
  };

  return (
    <div>
      <LandingPageBar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 12,
            width: 400,
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
                <form className="pt-3" onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 4 }}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          type="text"
                          name="managerName"
                          id="outlined-basic"
                          label="Manager Name"
                          variant="outlined"
                          value={formValues.managerName}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          type="text"
                          name="managerId"
                          id="outlined-basic"
                          label="Manager Id"
                          variant="outlined"
                          value={formValues.managerId}
                          onChange={handleChange}
                          required
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          type="text"
                          name="managerPhoneNumber"
                          id="outlined-basic"
                          label="Phone Number"
                          variant="outlined"
                          value={formValues.managerPhoneNumber}
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
                          // onClick={navigateToManagerLogin}
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
