import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import apiInstance from "../../services/apiInstance";
import { resetLoginData } from "./authSlice";

const USER_LOGIN = "/users/login";

export const userLogin = createAsyncThunk(
  "login/userLogin",
  async (postData: any, { dispatch, rejectWithValue }) => {
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
    } finally {
      dispatch(resetLoginData());
    }
  }
);
