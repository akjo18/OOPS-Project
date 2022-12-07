import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ManagerProductCard from "../components/ManagerProductCard";
import ManagerBar from "../components/ManagerBar";
import axios from "axios";
function ManagerHomePage() {
  // eslint-disable-next-line no-sparse-arrays
  // const items = [
  //   {
  //     name: "iPhone 14",
  //     price: 80000,
  //     qty: 5,
  //     id: 1,
  //     imgUrl: "https://i.postimg.cc/LszsMdsT/laptop.webp",
  //   },
  //   {
  //     name: "Dell Inspiron 14",
  //     price: 70000,
  //     qty: 4,
  //     id: 2,
  //     imgUrl: "https://i.postimg.cc/LszsMdsT/laptop.webp",
  //   },
  //   ,
  //   {
  //     name: "Samsung Galaxy 10",
  //     price: 60000,
  //     qty: 6,
  //     id: 3,
  //     imgUrl: "https://i.postimg.cc/LszsMdsT/laptop.webp",
  //   },
  //   {
  //     name: "Apple Smart Watch 6",
  //     price: 50000,
  //     qty: 10,
  //     id: 4,
  //     imgUrl: "https://i.postimg.cc/LszsMdsT/laptop.webp",
  //   },
  // ];

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
                   quantity={item.quantity}
                   productNumber={item.productNumber}
                   image={item.image}
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
