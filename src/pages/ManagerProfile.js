import React from "react";
import UserBar from "../components/UserBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function ManagerProfile() {
  const navigate = useNavigate();
  const navigateToUserLogin = () => {
    navigate("/");
  };

  const navigateToManagerChangePassword = () => {
    navigate("/manager-change-password");
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
            height: 450,
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
                  defaultValue="Akshat Johar"
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
                  defaultValue="akshatjohar@outlook.com"
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
                  defaultValue="143 BC Lines , Meerut Cantonment , Uttar Pradesh (U.P) , 250001"
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
                  defaultValue="9896111979"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
              </div>
            </div>
            <div class="d-flex flex-row">
              {/* <div class="p-2">
                <input
                  class="form-control bg-light text-dark"
                  type="text"
                  value="Current Balance: 10000"
                  readonly
                />
              </div> */}
              {/* <div class="p-2">
                <Button variant="contained">TopUp - 500</Button>
              </div> */}
            </div>
            <div class="d-flex flex-row-reverse">
              <div class="p-2">
                <Button variant="contained" onClick={navigateToUserLogin}>
                  Exit Application
                </Button>
              </div>
              <div class="p-2">
                <Button
                  variant="contained"
                  onClick={navigateToManagerChangePassword}
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

export default ManagerProfile;
