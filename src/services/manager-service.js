import { myAxios } from "./helper";

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
