import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usuario:'',
  status: 'offline',
}

export const loginSlice = createSlice({
  name: 'loginStatus',
  initialState,
  reducers: {
    login: (state) => {
      state.status = "login";
    },
    logout: (state) => {
        state.status = "offline";
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
