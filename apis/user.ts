import axios from "axios";

export function logInAPI(data: { email: string; password: string }) {
  return axios.post("/api/users/login", data).then((res) => res.data);
}

export const registAPI = (data: {
  email: string;
  password: string;
  phone: string;
}) => {
  return axios.post("/api/users/sign", data).then((res) => res.data);
};

// export const loadMyInfoAPI = () => {
//   return axios.get("/api/users/me").then((res) => res.data);
// };
