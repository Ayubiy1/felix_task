import axios from "axios";

export const api = axios.create({
  baseURL: "https://0001.uz/",
  timeout: 30 * 1000,
  headers: {
    "Content-Type": "application/json",
    Key: "aassddff1",
    Sign: "aassddff1",
  },
});

export const apiPost = axios.create({
  baseURL: "https://0001.uz/",
  timeout: 30 * 1000,
  headers: {
    "Content-Type": "application/json",
    Key: "aassddff1",
    Sign: "aassddff1",
  },
});
