import { myAxios } from "./helper";

export const signUp = (user) => {
  return myAxios.post("/user/signup", user).then((response) => response.data);
};
