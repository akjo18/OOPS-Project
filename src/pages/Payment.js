import React from "react";
import UserBar from "../components/UserBar";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { CardContent, Grid, Card, Typography } from "@mui/material";
// import { width } from "@mui/system";
// import { CenterFocusStrong } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Payment() {
  const navigate = useNavigate();
  const navigateToConfirmationPage = () => {
    navigate("/confirmation");
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
                  Payment Window
                </Typography>
                <form className="pt-5">
                  <Grid container spacing={2}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 4 }}>
                      <Grid item xs={6}>
                        <input
                          class="form-control bg-light text-dark"
                          type="text"
                          value="Amount: XXXX"
                          readonly
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <input
                          class="form-control bg-light text-dark"
                          type="text"
                          value="Current Balance: XXXX"
                          readonly
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          // onClick={navigateToManagerLogin}
                        >
                          TOPUP 500
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          onClick={navigateToConfirmationPage}
                        >
                          Place Order
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

export default Payment;
