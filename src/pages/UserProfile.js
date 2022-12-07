import React, { useState, useEffect } from "react";
import UserBar from "../components/UserBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { myAxios } from "../services/helper";
import { toast } from "react-toastify";
import { exitApplication } from "../services/user-service";

function UserProfile() {
  const customerEmail = localStorage.getItem("email");
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await myAxios.get(
      `http://localhost:8080//viewCustomerDetailsByCustomer/${customerEmail}`
    );
    setUser(result.data);
  };

  const navigate = useNavigate();
  const navigateToUserLogin = () => {
    navigate("/");
  };

  const navigateToUserChangePassword = () => {
    navigate("/user-change-password");
  };
  const [walletBalance, setWalletBalance] = useState(1000);

  const handleExitApplication = () => {
    exitApplication()
      .then((response) => {
        console.log(response); // response is the data returned from the server
        console.log("success log"); // if the data is returned successfully, then the user is redirected to the login page
        // if (response.status === 200) {        // if the data is returned successfully, then the user is redirected to the login page
        //   navigate("/");
        // }
        toast.success("Application Exit Successful");
        navigate("/");
      })
      .catch((error) => {
        // if the data is not returned successfully, then the user is redirected to the login page
        console.log(error);
        console.log("error log");
        toast.error("Invalid Credentials");
      });
  };

  const handleWalletBalance = () => {
    setWalletBalance(walletBalance + 500);
  };

  return (
    <div>
      <UserBar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 10,
            width: 800,
            height: 550,
          },
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Paper elevation={15}>
          <div class="mt-3 p-3">
            <h4>Personal Details</h4>
            <div class="d-flex flex-row">
              <div class="p-2">
                {" "}
                <TextField
                  id="filled-read-only-input"
                  label="Name"
                  value={user.name}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
              </div>
              <div class="p-2">
                {" "}
                <TextField
                  id="filled-read-only-input"
                  label="Email Id"
                  value={user.email}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
              </div>
            </div>
            <div class="d-flex flex-row">
              <div class="p-2">
                <TextField
                  id="outlined-multiline-static"
                  label="Address"
                  multiline
                  rows={4}
                  value={user.address}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
              </div>
            </div>
            <div class="d-flex flex-row">
              <div class="p-2">
                <TextField
                  id="filled-read-only-input"
                  label="Phone Number"
                  value={user.phoneNumber}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
              </div>
            </div>
            <div class="d-flex flex-row">
              <div class="p-2">
                <label>Current Balance</label>
                <input
                  class="form-control bg-light text-dark"
                  type="text"
                  value={user.walletBalance}
                  readonly
                />
              </div>
            </div>
            <div class="d-flex flex-row">
              <div class="p-2">
                <Button variant="contained" onClick={handleWalletBalance}>
                  TopUp 500
                </Button>
              </div>
            </div>
            <div class="d-flex flex-row-reverse">
              <div class="p-2">
                <Button variant="contained" onClick={handleExitApplication}>
                  Exit Application
                </Button>
              </div>
              <div class="p-2">
                <Button
                  variant="contained"
                  onClick={navigateToUserChangePassword}
                >
                  Change Password
                </Button>
              </div>
            </div>
          </div>
        </Paper>
      </Box>
    </div>
  );
}

export default UserProfile;
