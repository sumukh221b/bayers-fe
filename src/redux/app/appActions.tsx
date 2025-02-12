// import apiInstance from "@/services/apiInstance";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { AxiosResponse } from "axios";

// const NETWORK_LOGS = "/logging/network/list";

// export const fetchNetworkLogs = createAsyncThunk(
//   "logs/fetchNetworkLogs",
//   async (postData, { rejectWithValue }) => {
//     try {
//       const response: AxiosResponse = await apiInstance.post(
//         NETWORK_LOGS,
//         postData
//       );

//       if (
//         response.data &&
//         response.data.code >= 200 &&
//         response.data.code < 300
//       ) {
//         return response.data.data;
//       } else {
//         return rejectWithValue(response.data.dispMsg);
//       }
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue("Something went wrong");
//     }
//   }
// );

export {};
