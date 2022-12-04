import { myAxios } from "./helper";

export const managerSignUp = (user) => {
  return myAxios
    .post("/ManagerRegistration", user)
    .then((response) => response.data);
};
