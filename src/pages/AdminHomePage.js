import { Box, Grid } from "@mui/material";
import React from "react";
import AdminBar from "../components/AdminBar";
import AdminProductCard from "../components/AdminProductCard";

function AdminHomePage() {
  // eslint-disable-next-line no-sparse-arrays
  const items = [
    {
      name: "iPhone 14",
      price: 80000,
      qty: 5,
    },
    {
      name: "Dell Inspiron 14",
      price: 70000,
      qty: 4,
    },
    ,
    {
      name: "Samsung Galaxy 10",
      price: 60000,
      qty: 6,
    },
    {
      name: "Apple Smart Watch 6",
      price: 50000,
      qty: 10,
    },
    {
      name: "iPhone 13",
      price: 80000,
      qty: 5,
    },
    {
      name: "Dell Inspiron 13",
      price: 70000,
      qty: 4,
    },
    ,
    {
      name: "Samsung Galaxy 9",
      price: 60000,
      qty: 6,
    },
    {
      name: "Apple Smart Watch 5",
      price: 50000,
      qty: 10,
    },
  ];

  return (
    <div>
      <AdminBar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 10,
            width: 1100,
          },
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          container
          spacing={{ xs: 4, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {items.map((item) => {
            return (
              <div className="p-2">
                <AdminProductCard
                  name={item.name}
                  price={item.price}
                  qty={item.qty}
                />
              </div>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default AdminHomePage;
