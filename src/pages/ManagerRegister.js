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

function ManagerRegister() {
  const navigate = useNavigate();

  const initialValues = {
    managername: "",
    managerid: "",
    manageremail: "",
    managerphonenumber: "",
    manageraddress: "",
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
  };

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
                  New manager Register
                </Typography>
                <form className="pt-3" onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 4 }}>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          type="text"
                          name="managername"
                          id="outlined-basic"
                          label="Manager Name"
                          variant="outlined"
                          value={formValues.managername}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          type="text"
                          name="managerid"
                          id="outlined-basic"
                          label="manager Id"
                          variant="outlined"
                          value={formValues.managerid}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          type="email"
                          name="manageremail"
                          label="Email Address"
                          id="fullWidth"
                          variant="outlined"
                          value={formValues.manageremail}
                          onChange={handleChange}
                          required
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          type="text"
                          name="managerphonenumber"
                          id="outlined-basic"
                          label="Phone Number"
                          variant="outlined"
                          value={formValues.managerphonenumber}
                          onChange={handleChange}
                          required
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          type="text"
                          name="manageraddress"
                          id="outlined-multiline-static"
                          label="Address"
                          multiline
                          required
                          rows={4}
                          value={formValues.manageraddress}
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
