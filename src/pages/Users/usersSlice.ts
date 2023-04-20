import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Users {
  users: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: Users = { users: [], status: "idle", error: null };

// Define the async thunk for fetching users data
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const { data } = await axios.get(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
    );
    return data;
  } catch (error: any) {
    throw error.response.data.message;
  }
});

// Define the users slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.users = [...state.users, ...action.payload];
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
