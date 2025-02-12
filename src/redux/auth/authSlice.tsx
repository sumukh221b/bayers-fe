import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authActions";
import { initServicePayload } from "../../utils";
import { RootState } from "../store";
// import { RootState } from "../store";

export interface AuthState {
  login: {
    data: any | null;
    loading: boolean;
    error: string | null;
    success: string | null;
  };
}

export const initialState: AuthState = {
  login: {
    ...initServicePayload<any | null>(null),
    success: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetLoginData: (state) => {
      state.login.success = null;
    },
    // resetStore: () => initialState,
  },
  extraReducers: (builder) => {
    //auth
    builder.addCase(userLogin.pending, (state) => {
      state.login.loading = true;
      state.login.success = null;
    });

    builder.addCase(
      userLogin.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.login.loading = false;
        state.login.data = payload;
        state.login.success = "Success";
      }
    );

    builder.addCase(userLogin.rejected, (state, action) => {
      state.login.loading = false;
      state.login.error = action.payload as string;
      state.login.success = null;
    });
  },
});

export const { resetLoginData } = authSlice.actions;

export const loginSelector = (state: RootState) => state.login.login;

export default authSlice.reducer;
