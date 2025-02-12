// import { resetStore as authResetStore } from "./redux/auth/authSlice";
// import { resetStore as userResetStore } from "./redux/user/userSlice";

export const initServicePayload = <T>(
  data: T
): // data: T
{
  data: T | null;
  loading: boolean;
  error: string | null;
} => {
  return {
    data,
    loading: false,
    error: null,
  };
};

// export const resetStateData = (dispatch: any) => {
//   dispatch(authResetStore());
//   dispatch(userResetStore());
// };
