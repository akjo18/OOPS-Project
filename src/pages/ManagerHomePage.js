import { Box, Grid } from "@mui/material";
import React from "react";
import ManagerProductCard from "../components/ManagerProductCard";
import ManagerBar from "../components/ManagerBar";

function ManagerHomePage() {
  // eslint-disable-next-line no-sparse-arrays
  const items = [
    {
      name: "iPhone 14",
      price: 80000,
      qty: 5,
    },
    {
      name: "iPhone 13",
      price: 70000,
      qty: 4,
    },
    ,
    {
      name: "iPhone 12",
      price: 60000,
      qty: 6,
    },
    {
      name: "iPhone 11",
      price: 50000,
      qty: 10,
    },
  ];

  return (
    <div>
      <ManagerBar />
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
                <ManagerProductCard
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

export default ManagerHomePage;
