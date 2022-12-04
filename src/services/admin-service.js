import { myAxios } from "./helper";

export const loginAdmin = (loginDetail) => {
  return myAxios
    .post("/adminLogin", loginDetail)
    .then((response) => response.data);
};
