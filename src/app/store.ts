import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sidebarSlice from "../components/Sidebar/sidebarSlice";
import usersSlice from "../pages/Users/usersSlice";
import userSlice from "../pages/UserDetails/userDetailsSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    users: usersSlice,
    user: userSlice,
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
