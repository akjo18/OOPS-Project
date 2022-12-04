import { myAxios } from "./helper";

export const signUp = (user) => {
  return myAxios.post("/registration", user).then((response) => response.data);
};

export const loginUser = (loginDetail) => {
  return myAxios.post("/", loginDetail).then((response) => response.data);
};
