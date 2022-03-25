import axios from "axios";

export const uploadAPI = (data: any) => {
  return axios.post("/api/post/upload", data).then((res) => res.data);
};
