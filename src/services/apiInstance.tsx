// import { isTokenValid } from "@/utils";
// import {
//   getAuthToken,
//   removeAuthToken,
//   setAuthToken,
// } from "@/utils/localstorage";
// import axios, { CreateAxiosDefaults } from "axios";

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const apiInstanceConfig: CreateAxiosDefaults<any> = {
//   // `baseURL` will be prepended to `url` unless `url` is absolute.
//   // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
//   // to methods of that instance.
//   baseURL: import.meta.env.VITE_BACKEND_API,
//   headers: {
//     "Content-Type": "application/json",
//   },

//   // `timeout` specifies the number of milliseconds before the request times out.
//   // If the request takes longer than `timeout`, the request will be aborted.
//   // timeout: 10000, // default is `0` (no timeout)

//   // `withCredentials` indicates whether or not cross-site Access-Control requests
//   // should be made using credentials
//   withCredentials: false, // default

//   // `responseType` indicates the type of data that the server will respond with
//   // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
//   //   browser only: 'blob'
//   responseType: "json", // default

//   // `responseEncoding` indicates encoding to use for decoding responses (Node.js only)
//   // Note: Ignored for `responseType` of 'stream' or client-side requests
//   // options are: 'ascii', 'ASCII', 'ansi', 'ANSI', 'binary', 'BINARY', 'base64', 'BASE64', 'base64url',
//   // 'BASE64URL', 'hex', 'HEX', 'latin1', 'LATIN1', 'ucs-2', 'UCS-2', 'ucs2', 'UCS2', 'utf-8', 'UTF-8',
//   // 'utf8', 'UTF8', 'utf16le', 'UTF16LE'
//   responseEncoding: "utf8", // default

//   proxy: {
//     protocol: "http",
//     host: "192.168.11.36",
//     // hostname: '127.0.0.1' // Takes precedence over 'host' if both are defined
//     port: 3002,
//     // auth: {
//     //   username: "mikeymike",
//     //   password: "rapunz3l",
//     // },
//   },

//   // `decompress` indicates whether or not the response body should be decompressed
//   // automatically. If set to `true` will also remove the 'content-encoding' header
//   // from the responses objects of all decompressed responses
//   // - Node only (XHR cannot turn off decompression)
//   decompress: true, // default
// };

// const apiInstance = axios.create(apiInstanceConfig);

// apiInstance.interceptors.request.use(
//   async (config) => {
//     const token = await getAuthToken();
//     console.log("request", token);
//     if (token && !isTokenValid(token)) {
//       //fetch new/refresh token here
//     }
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     // Handle request errors here
//     return Promise.reject(error);
//   }
// );

// apiInstance.interceptors.response.use(
//   async (response) => {
//     let token = await getAuthToken();
//     if (response.data && response.data.data?.accessToken) {
//       token = response.data.data.accessToken;
//     }
//     setAuthToken(token);
//     return response;
//   },
//   (error) => {
//     if (error.response?.status === 401) {
//       // Handle unauthorized errors, e.g., redirect to login page
//       removeAuthToken(); // Optionally remove the token
//       // window.location.href = "/login"; // Redirect to login page
//     } else if (error.response) {
//       // Server responded with a status other than 200 range
//       console.error("Response error:", error.response.data);
//     } else if (error.request) {
//       // No response received
//       console.error("No response received:", error.request);
//     } else {
//       // Error setting up the request
//       console.error("Request error:", error.message);
//     }
//     return Promise.reject(error);
//   }
// );

// export default apiInstance;

export {};
