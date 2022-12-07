import React from "react";
import UserBar from "../components/UserBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { CardContent, Grid, Card, Typography } from "@mui/material";

function UserConfirmation() {
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
                  Order Placed Successfully
                </Typography>
                <Typography gutterBottom variant="h5" mb={2}>
                  Expected Delivery in 3 Days
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </Box>
    </div>
  );
}

export default UserConfirmation;
