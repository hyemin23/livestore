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
