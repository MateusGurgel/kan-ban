import axios from "axios";

export const apiEndpoint = "http://127.0.0.1:3333";
export const timeout = 5000;

export const api = axios.create({
  baseURL: apiEndpoint,
});
