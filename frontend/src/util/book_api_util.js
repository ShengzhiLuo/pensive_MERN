import axios from "axios";

export const getBooks = () => {
  return axios.get("/api/books");
};

export const getUserBooks = (id) => {
  return axios.get(`/api/books/user/${id}`);
};

export const writeBook = (data) => {
  return axios.post("/api/books/", data);
};