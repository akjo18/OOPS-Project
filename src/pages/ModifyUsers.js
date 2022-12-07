import React, { useState } from "react";
import AdminBar from "../components/AdminBar";
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

import { deleteUser, deleteManager } from "../services/admin-service";
import { toast } from "react-toastify";

function ModifyUsers() {
  const navigate = useNavigate();

  const customerInitialValues = { email: "" };
  const managerInitialValues = { managerId: "" };

  const [customerFormValues, setCustomerFormValues] = useState(
    customerInitialValues
  );
  const [managerFormValues, setManagerFormValues] =
    useState(managerInitialValues);
  const handleChangeCustomer = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setCustomerFormValues({ ...customerFormValues, [name]: value });

    // console.log(formValues);
  };

  const handleChangeManager = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;

    setManagerFormValues({ ...managerFormValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmitCustomer = (e) => {
    e.preventDefault();
    console.log(customerFormValues);
    deleteUser(customerFormValues.email)
      .then((response) => {
        console.log(response); // response is the data returned from the server
        console.log("success log"); // if the data is returned successfully, then the user is redirected to the login page
        // if (response.status === 200) {        // if the data is returned successfully, then the user is redirected to the login page
        //   navigate("/");
        // }
        toast.success("Customer Deleted");
        navigate("/admin-home-page");
      })
      .catch((error) => {
        toast.warn("Not valid Customer email");
        console.log(error);
        console.log("error log");
      });
  };

  const handleSubmitManager = (e) => {
    e.preventDefault();
    console.log(managerFormValues);
    deleteManager(managerFormValues)
      .then((response) => {
        console.log(response); // response is the data returned from the server
        console.log("success log"); // if the data is returned successfully, then the user is redirected to the login page
        // if (response.status === 200) {        // if the data is returned successfully, then the user is redirected to the login page
        //   navigate("/");
        // }
        toast.success("Manager Deleted");
        navigate("/admin-home-page");
      })
      .catch((error) => {
        toast.warn("Invalid Manager Details");
        console.log(error);
        console.log("error log");
      });
  };

  const navigateToRegisterUser = () => {
    navigate("/admin-user-register");
  };

  const navigateToRegisterManager = () => {
    navigate("/admin-manager-register");
  };

  return (
    <div>
      <AdminBar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 15,
            width: 900,
            height: 350,
          },
        }}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <div className="d-flex align-items-center justify-content-center p-2">
          <Grid>
            <Card style={{ maxWidth: 450, padding: "20px 5px" }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Add/Delete Customer
                </Typography>

                <form className="mt-3" onSubmit={handleSubmitCustomer}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        type="text"
                        placeholder="Enter Customer Email"
                        label="Customer Email"
                        name="email"
                        variant="outlined"
                        value={customerFormValues.email}
                        onChange={handleChangeCustomer}
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        required
                        // onClick={navigateToAdminHomePage}
                      >
                        Delete Customer
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                <Button
                  variant="text"
                  className="mt-2"
                  onClick={navigateToRegisterUser}
                >
                  Add Customer
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid className="p-4">
            <Card style={{ maxWidth: 450, padding: "20px 5px" }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Add/Delete Manager
                </Typography>

                <form className="mt-3" onSubmit={handleSubmitManager}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        type="text"
                        placeholder="Enter Manager Id"
                        label="Manager Id"
                        name="managerId"
                        variant="outlined"
                        // value={formValues.adminId}
                        // onChange={handleChange}
                        value={managerFormValues.managerId}
                        onChange={handleChangeManager}
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        required
                        // onClick={navigateToAdminHomePage}
                      >
                        Delete Manager
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                <Button
                  variant="text"
                  className="mt-2"
                  onClick={navigateToRegisterManager}
                >
                  Add Manager
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </Box>
    </div>
  );
}

export default ModifyUsers;
