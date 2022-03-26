import axios from "axios";

export const uploadAPI = (data: any) => {
  return axios.post("/api/products", data).then((res) => res.data);
};
