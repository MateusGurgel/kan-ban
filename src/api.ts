import axios from "axios";
import { apiEndpoint, timeout } from "./config";
import { toast } from "react-toastify";

export const api = axios.create({ baseURL: apiEndpoint, timeout: timeout });

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (!error.response) {

      toast.error("An error has occurred, try again later", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
      });

      const data = {
        errors: [
            {message: "Internet Connection Error"}
        ]
      }

      error.response = {
        data: data
      }
    }

    return Promise.reject(error);
  }
);
