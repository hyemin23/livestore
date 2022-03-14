import axios from "axios";

export function logInAPI(data: { email: string; password: string }) {
  return axios.post("/api/users/login", data).then((res) => res.data);
}

export const registAPI = (data: {
  email: string;
  password: string;
  phone: string;
  nickname: string;
}) => {
  return axios.post("/api/users/join", data).then((res) => res.data);
};
