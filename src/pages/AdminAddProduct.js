import React, { useState } from "react";
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

  const initialValues = {
    name: "",
    productId: "",
    quantity: "",
    description: "",
    price: "",
    image: "",
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
                <form className="pt-3" onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 4 }}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          name="productId"
                          id="outlined-basic"
                          label="Id"
                          variant="outlined"
                          value={formValues.productId}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          name="name"
                          id="outlined-basic"
                          label="Name"
                          variant="outlined"
                          value={formValues.name}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Enter Image Url"
                          type="text"
                          name="image"
                          id="fullWidth"
                          variant="outlined"
                          value={formValues.image}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Price"
                          name="price"
                          id="fullWidth"
                          variant="outlined"
                          value={formValues.price}
                          onChange={handleChange}
                          required
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          name="quantity"
                          id="outlined-basic"
                          label="Quantity"
                          variant="outlined"
                          value={formValues.quantity}
                          onChange={handleChange}
                          required
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          name="description"
                          id="outlined-multiline-static"
                          label="Product Description"
                          multiline
                          required
                          value={formValues.description}
                          onChange={handleChange}
                          rows={4}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          type="submit"
                          color="primary"
                          required
                          // onClick={navigateToAdminHomePage}
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
