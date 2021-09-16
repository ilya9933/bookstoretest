import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return config;
    }

    config.headers.common.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    console.error("AXIOS_REQUEST_ERROR", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("AXIOS_RESPONSE_ERROR", error);
    return Promise.reject(error);
  }
);

export default api;
