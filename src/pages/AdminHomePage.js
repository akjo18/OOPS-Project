import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AdminBar from "../components/AdminBar";
import AdminProductCard from "../components/AdminProductCard";
import { myAxios } from "../services/helper";
import axios from "axios";

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

function AdminHomePage() {
  // const [items, setItems] = React.useState([]);

  // React.useEffect(() => {
  //   myAxios
  //     .get("/getProducts")
  //     .then((response) => setItems(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

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

export default AdminHomePage;
