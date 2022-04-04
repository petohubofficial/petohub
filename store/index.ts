import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { ThunkAction } from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { Action } from "@reduxjs/toolkit";

import { api } from "services/api.service";
import { admin } from "services/admin.service";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [admin.reducerPath]: admin.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, admin.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
