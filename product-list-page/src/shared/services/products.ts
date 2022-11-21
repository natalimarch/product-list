import axios from "axios";

export const base = "https://testbackend.nc-one.com";

export const instance = axios.create({
  baseURL: "https://testbackend.nc-one.com/image",
});

export const getProducts = () => {
  return instance.get("/");
};

export const getProductById = (id: number) => {
  return instance.get(`?id=${id}`);
};
