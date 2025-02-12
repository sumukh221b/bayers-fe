import axios, { CreateAxiosDefaults } from "axios";
import { getAuthToken, setAuthToken } from "../localStorage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const apiInstanceConfig: CreateAxiosDefaults<any> = {
  baseURL: "http://10.137.199.79:3021", // Use your local ip
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
  responseType: "json",

  responseEncoding: "utf8", // default

  proxy: {
    protocol: "http",
    host: "192.168.11.36",
    port: 3002,
  },

  decompress: true, // default
};

const apiInstance = axios.create(apiInstanceConfig);

apiInstance.interceptors.request.use(
  async (config) => {
    const token = await getAuthToken();
    console.log("request", token);
    if (token) {
    }
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  async (response) => {
    console.log(response);
    let token = await getAuthToken();
    if (response.data && response.data.token) {
      token = response.data.token;
    }
    setAuthToken(token);
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
      localStorage.clear();
      if (error.response.data.error) {
        alert(error.response.data.error || "Unknown");
      }
    } else if (error.response) {
      const errorMessage =
        error.response.data?.error || "An unknown error occurred!";
      alert(errorMessage);
      console.error("Response error:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Request error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiInstance;
