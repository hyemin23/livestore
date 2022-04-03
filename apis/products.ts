import axios from "axios";
import { UploadProductForm } from "src/interface/product";

export const uploadAPI = (data: UploadProductForm) => {
  return axios.post("/api/products", data).then((res) => res.data);
};

export const getProductsAPI = () => {
  return axios.get(`/api/products/`).then((res) => res.data);
};

export const getProductAPI = (id: number) => {
  return axios.get(`/api/products/${id}`).then((res) => res.data);
};

export const postLikeAPI = (id: number) => {
  return axios.post(`/api/products/${id}/fav`).then((res) => res.data);
};

export const comCommentAPI = (
  id: number,
  data: {
    contents: string;
  }
) => {
  return axios
    .post(`/api/products/${id}/comment/`, data)
    .then((response) => response.data);
};
