import React, { useState } from "react";

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
import UserBar from "../components/UserBar";

function UserChangePassword() {
  const navigate = useNavigate();

  const initialValues = {
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

  const navigateToUserProfile = () => {
    navigate("/user-profile");
  };

  return (
    <div>
      <UserBar />
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
                  Change Password
                </Typography>

                <form className="mt-3" onSubmit={handleSubmit}>
                  <Grid container spacing={1}>
                    {/* <Grid item xs={12}>
                      <TextField
                        type="email"
                        placeholder="Enter New Password"
                        label="New Password"
                        variant="outlined"
                        required
                      />
                    </Grid> */}
                    <Grid item xs={12}>
                      <TextField
                        placeholder="Enter New Password"
                        label="New Password"
                        type="password"
                        variant="outlined"
                        name="password"
                        autoComplete="current-password"
                        value={formValues.password}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        required
                        // onClick={navigateToUserProfile}
                      >
                        Update Password
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                {/* <Button
                  variant="text"
                  className="mt-2"
                  // onClick={navigateToForgotPassword}
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

export default UserChangePassword;
