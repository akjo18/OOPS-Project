import React from "react";
import UserBar from "../components/UserBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UserProductsCard from "../components/UserProductsCard";

function UserHomePage() {
  // eslint-disable-next-line no-sparse-arrays
  const items = [
    {
      name: "iPhone 14",
      price: 80000,
      qty: 5,
    },
    {
      name: "iPhone 13",
      price: 80000,
      qty: 4,
    },
    ,
    {
      name: "iPhone 12",
      price: 80000,
      qty: 6,
    },
    {
      name: "iPhone 11",
      price: 80000,
      qty: 10,
    },
  ];

  return (
    <div>
      <UserBar />

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
                <UserProductsCard
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

export default UserHomePage;
