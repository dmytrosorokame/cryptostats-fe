import { authApi } from "./../api/auth.api";
import { usersApi } from "./../api/users.api";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../slices/auth.slice";
import { coinbaseApi } from "../api/coinbase.api";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [coinbaseApi.reducerPath]: coinbaseApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(authApi.middleware)
      .concat(coinbaseApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
