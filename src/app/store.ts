import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sidebarSlice from "../components/Sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
