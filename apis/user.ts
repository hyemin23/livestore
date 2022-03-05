import axios from "axios";

export function logInAPI(data: { email: string; password: string }) {
  return axios.post("/api/users/login", data).then((res) => res.data);
}
