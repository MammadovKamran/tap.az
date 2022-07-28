import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter({
  selectIds: (user) => user.id,
});

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const response = await fetch("http://localhost:3000/users");
    return await response.json();
  } catch (error) {
    throw new error(error);
  }
});

export const addUser = createAsyncThunk("user/addUser", async (user) => {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    throw new error(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: userAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "succeeded";
      userAdapter.setAll(state, action.payload);
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { selectIds: selectUserIds, selectEntities: selectUserEntities, selectAll: selectAllUsers, selectTotal: selectTotalUsers, selectById: selectUserById } = userAdapter.getSelectors((state) => state.user);

export default userSlice.reducer;
