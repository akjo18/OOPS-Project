import React from "react";
import UserBar from "../components/UserBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UserProductsCard from "../components/UserProductsCard";
import SearchBar from "../components/search/search";

import { useState } from "react";

function UserHomePage() {
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

  const filterItems = (items, query) => {
    if (!query) {
      return items;
    }

    return items.filter((item) => {
      const itemName = item.name.toLowerCase();
      return itemName.includes(query);
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredItems = filterItems(items, searchQuery);

  return (
    <div>
      <UserBar />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 5,
            width: 1100,
          },
        }}
        alignItems="center"
        justifyContent="center"
      >
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          alignItems="center"
        />

        <Grid
          container
          spacing={{ xs: 4, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {filteredItems.map((item) => {
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
