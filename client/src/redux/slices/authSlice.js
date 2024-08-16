import { createSlice } from "@reduxjs/toolkit";

// Initial state setup
const initialState = {
  user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  isSidebarOpen: false,
};

// Create slice for authentication state management
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set user credentials and save them to local storage
    setCredentials: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    // Action to log out the user and remove user data from local storage
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("userInfo");
    },
    // Action to toggle sidebar open/closed state
    setOpenSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

// Export actions for use in components
export const { setCredentials, logout, setOpenSidebar } = authSlice.actions;

// Export reducer to be used in the store
export default authSlice.reducer;