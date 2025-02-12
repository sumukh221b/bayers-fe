import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initServicePayload } from "../../utils";
import { createUser } from "./userActions";
import { RootState } from "../store";

export interface UserState {
  user: {
    data: any | null;
    loading: boolean;
    error: string | null;
    success: string | null;
  };
}

export const initialState: UserState = {
  user: {
    ...initServicePayload<any | null>(null),
    success: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserData: (state) => {
      state.user.success = null;
    },
    // resetStore: () => initialState,
  },
  extraReducers: (builder) => {
    //auth
    builder.addCase(createUser.pending, (state) => {
      state.user.loading = true;
      state.user.success = null;
    });

    builder.addCase(
      createUser.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.user.loading = false;
        state.user.data = payload;
        state.user.success = "Success";
      }
    );

    builder.addCase(createUser.rejected, (state, action) => {
      state.user.loading = false;
      state.user.error = action.payload as string;
      state.user.success = null;
    });
  },
});

export const { resetUserData } = userSlice.actions;

export const userSelector = (state: RootState) => state.user.user;
export default userSlice.reducer;
