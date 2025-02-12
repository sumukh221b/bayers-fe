import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../store";

export interface AppsState {
  //   system: { data: Logs | null; loading: boolean; error: string | null };
}

export const initialState: AppsState = {
  //   system: { ...initServicePayload<Logs | null>(null) },
};

export const appSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {
    // updateLogs: (
    //   state,
    //   {
    //     payload,
    //   }: PayloadAction<{ type: string; data: SystemLogs | NetworkLogs }>
    // ) => {
    //   if (payload.type === "network") {
    //     state.network.data = [...state.network.data, payload.data];
    //   } else {
    //     state.system.data = [...state.system.data, payload.data];
    //   }
    // },
  },
  extraReducers: (builder) => {
    //network logs
    // builder.addCase(fetchNetworkLogs.pending, (state) => {
    //   state.network.loading = true;
    // });
    // builder.addCase(
    //   fetchNetworkLogs.fulfilled,
    //   (state, { payload }: PayloadAction<Logs>) => {
    //     state.network.loading = false;
    //     state.network.data = payload;
    //   }
    // );
    // builder.addCase(fetchNetworkLogs.rejected, (state, action) => {
    //   state.network.loading = false;
    //   state.network.error = action.payload as string;
    // });
  },
});

// export const {} = logsSlice.actions;

// export const systemLogsData = (state: RootState) => state.logs.system;
export default appSlice.reducer;
