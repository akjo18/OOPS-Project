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
