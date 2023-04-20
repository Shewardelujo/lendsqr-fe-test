import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  user: {};
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: User = { user: [], status: "idle", error: null };

// Define the async thunk for fetching a user data
export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (userId: number) => {
    console.log("UserId", userId);
    try {
      const { data } = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`
      );
      console.log("data", data);
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error: any) {
      const message = error.response?.data?.message || "Unknown error";
      throw new Error(`Failed to fetch user: ${message}`);
    }
  }
);

// Define the user slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = { ...state.user, ...action.payload };
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
