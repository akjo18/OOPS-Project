import { myAxios } from "./helper";

// for admin too
export const managerSignUp = (user) => {
  return myAxios
    .post("/ManagerRegistration", user)
    .then((response) => response.data);
};

export const loginManager = (loginDetail) => {
  return myAxios
    .post("/managerLogin", loginDetail)
    .then((response) => response.data);
};

// get method to view product list
export const getProductList = () => {
  return myAxios.get("/getProductList").then((response) => response.data);
};
// get method to view manager profile
export const getManagerProfile = () => {
  return myAxios.get("/getManagerProfile").then((response) => response.data);
};
// post method to add product
export const addProduct = (product) => {
  return myAxios
  .post("/createProductByManager", product)
  .then((response) => response.data);
};
// delete method to delete product
export const deleteProduct = (name) => {
  return myAxios
    .get(`/deleteProductByManager/${name}`)
    .then((response) => response.data);
};
