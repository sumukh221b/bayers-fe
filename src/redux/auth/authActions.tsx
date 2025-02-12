import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import apiInstance from "../../services/apiInstance";

const USER_LOGIN = "/users/login";
const USER_REGISTRATION = "/users/register";

export const userLogin = createAsyncThunk(
  "login/userLogin",
  async (postData: any, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await apiInstance.post(
        USER_LOGIN,
        postData
      );

      if (
        response.data &&
        response.data.code >= 200 &&
        response.data.code < 300
      ) {
        return response.data.data;
      } else {
        if (response.data.error) {
          alert(response.data.error || "Unknown");
        }
        return rejectWithValue(response.data.dispMsg);
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue("Something went wrong");
    }
  }
);

export const userRegistration = createAsyncThunk(
  "login/userRegistration",
  async (postData: any, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await apiInstance.post(
        USER_REGISTRATION,
        postData
      );

      if (
        response.data &&
        response.data.code >= 200 &&
        response.data.code < 300
      ) {
        return response.data.data;
      } else {
        if (response.data.error) {
          alert(response.data.error || "Unknown");
        }
        return rejectWithValue(response.data.dispMsg);
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue("Something went wrong");
    }
  }
);
