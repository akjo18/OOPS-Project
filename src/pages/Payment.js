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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const navigateToUserHomePage = () => {
    navigate("/user-home-page");
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
                        <Button variant="contained" onClick={handleClickOpen}>
                          Place Order
                        </Button>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            Order Placed !
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              Expected Delivery Date : 26th November 22
                            </DialogContentText>
                            <DialogContentText id="alert-dialog-description">
                              Check Email For Conformation Message
                            </DialogContentText>
                          </DialogContent>

                          <DialogActions>
                            <Button onClick={navigateToUserHomePage} autoFocus>
                              Close
                            </Button>
                          </DialogActions>
                        </Dialog>
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
