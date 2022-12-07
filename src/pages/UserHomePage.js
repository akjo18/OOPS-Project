import React from "react";
import UserBar from "../components/UserBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UserProductsCard from "../components/UserProductsCard";
import SearchBar from "../components/search/search";
import axios from "axios";

import { useState, useEffect } from "react";

function UserHomePage() {
  // eslint-disable-next-line no-sparse-arrays
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      "http://localhost:8080/viewAllProductsByManager"
    );
    setItems(result.data);
  };

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
                  id={item.id}
                  imgUrl={item.imgUrl}
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
