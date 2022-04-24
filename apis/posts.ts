import axios from "axios";
import { UploadPostsForm } from "./../src/interface/posts";

export const uploadPostsAPI = (data: UploadPostsForm) => {
  return axios.post("/api/posts", data).then((res) => res.data);
};

export const getPostsAPI = () => {
  return axios.get("/api/posts").then((res) => res.data);
};

export const getPostTypeAPI = (type: Number) => {
  return axios.get(`/api/posts/type/${type}`).then((res) => res.data);
};

export const getPostSearchAPI = (id: Number) => {
  return axios.get(`/api/posts/${id}`).then((res) => res.data);
};
