import { myAxios } from "./helper";

// for admin too
export const signUp = (user) => {
  return myAxios.post("/registration", user).then((response) => response.data);
};

export const loginUser = (loginDetail) => {
  return myAxios
    .post("/loginByPassword", loginDetail)
    .then((response) => response.data);
};

// put method for forgot password
export const forgotPassword = (user) => {
  return myAxios.put("/forgotPassword", user).then((response) => response.data);
};
// put method for change password
export const changePassword = (user) => {
  return myAxios.put("/changePassword", user).then((response) => response.data);
};
// get method for fetching product list (user home page)
export const getProductList = () => {
  return myAxios.get("/getProductList").then((response) => response.data);
};

// get method for fetching user details (profile page)
export const getUserProfile = () => {
  return myAxios.get("/getUserProfile").then((response) => response.data);
};
// update wallet method (on payment page and profile page)
export const updateWallet = (user) => {
  return myAxios.put("/updateWallet").then((response) => response.data);
};
// post method to send product object to cart (add to cart on click)
export const addToCart = (product) => {
  return myAxios.post("/addToCart", product).then((response) => response.data);
};
// get method for fetching product list in cart (on cart page)
export const getCartList = (user) => {
  return myAxios.get("/getCartList").then((response) => response.data);
};
// delete method to delete cart (on place order and on cart page)
export const deleteCart = (user) => {
  return myAxios.delete("/deleteCart").then((response) => response.data);
};
// delete method to exit application (delete user)
export const exitApplication = (user) => {
  return myAxios.delete("/exitApplication").then((response) => response.data);
};
// post method to decrease quantity of product in cart (on place order)
export const decreaseQuantity = (product) => {
  return myAxios
    .post("/decreaseQuantity", product)
    .then((response) => response.data);
};

// delete method to delete item from cart
export const deleteItem = (product) => {
  return myAxios
    .delete(`/deleteItem/${product}`)
    .then((response) => response.data);
};
