import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: loadUserInfoFromLocalStorage(),
};

function loadUserInfoFromLocalStorage() {
  const savedUserInfo = localStorage.getItem("userInfo");
  const savedExpirationTime = localStorage.getItem("expirationTime");

  if (savedUserInfo && savedExpirationTime) {
    const expirationTime = parseInt(savedExpirationTime, 10);
    const currentTime = new Date().getTime();

    if (currentTime < expirationTime) {
      return JSON.parse(savedUserInfo);
    } else {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("expirationTime");
    }
  }

  return null;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));

      const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 1 day
      localStorage.setItem("expirationTime", expirationTime.toString());
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("expirationTime");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
