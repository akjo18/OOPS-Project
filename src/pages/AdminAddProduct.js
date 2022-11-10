import React from "react";
import AdminBar from "../components/AdminBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { CardContent, Grid, Card, Typography } from "@mui/material";
import { width } from "@mui/system";
import { CenterFocusStrong } from "@mui/icons-material";

function AdminAddProduct() {
  const navigate = useNavigate();
  const navigateToAdminHomePage = () => {
    navigate("/admin-home-page");
  };

  return (
    <div>
      <AdminBar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 12,
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
                  Add New Product
                </Typography>
                <form className="pt-3">
                  <Grid container spacing={2}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 4 }}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          className=""
                          id="outlined-basic"
                          label="Name"
                          variant="outlined"
                          required
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Price"
                          id="fullWidth"
                          variant="outlined"
                          required
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          id="outlined-basic"
                          label="Quantity"
                          variant="outlined"
                          required
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          label="Product Description"
                          multiline
                          required
                          rows={4}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          onClick={navigateToAdminHomePage}
                        >
                          Add Product
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

export default AdminAddProduct;
