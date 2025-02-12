import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import apiInstance from "../../services/apiInstance";
import { resetUserData } from "./userSlice";

const USER_REGISTRATION = "/users/register";

export const createUser = createAsyncThunk(
  "login/createUser",
  async (postData: any, { dispatch, rejectWithValue }) => {
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
        if (response.data.message) {
          alert(response.data.message || "Success!");
        }
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
      dispatch(resetUserData());
    }
  }
);
