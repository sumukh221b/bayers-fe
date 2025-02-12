import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authActions";
import { initServicePayload } from "../../utils";
// import { RootState } from "../store";

export interface AuthState {
  login: { data: any | null; loading: boolean; error: string | null };
}

export const initialState: AuthState = {
  login: {
    ...initServicePayload<any | null>(null),
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // resetStore: () => initialState,
  },
  extraReducers: (builder) => {
    //auth
    builder.addCase(userLogin.pending, (state) => {
      state.login.loading = true;
    });

    builder.addCase(
      userLogin.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.login.loading = false;
        state.login.data = payload;
      }
    );

    builder.addCase(userLogin.rejected, (state, action) => {
      state.login.loading = false;
      state.login.error = action.payload as string;
    });
  },
});

// export const { resetStore } = authSlice.actions;
export default authSlice.reducer;
