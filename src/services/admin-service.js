import { myAxios } from "./helper";

export const loginAdmin = (loginDetail) => {
  return myAxios
    .post("/adminLogin", loginDetail)
    .then((response) => response.data);
};

// get method to view product list
export const getProductList = () => {
  return myAxios.get("/getProductList").then((response) => response.data);
};
// delete method to delete product
export const deleteProduct = (name) => {
  return myAxios
    .delete(`/deleteProduct/${name}`)
    .then((response) => response.data);
};
// post method to add product

export const addProduct = (product) => {
  return myAxios.post("/addProduct", product).then((response) => response.data);
};

// delete method to delete user (by email)

export const deleteUser = (customerEmail) => {
  return myAxios
    .delete(`/deleteCustomerByAdmin/${customerEmail}`)
    .then((response) => response.data);
};

// delete method to delete manager (by id)
export const deleteManager = (id) => {
  return myAxios
    .delete(`/deleteManager/${id}`)
    .then((response) => response.data);
};
