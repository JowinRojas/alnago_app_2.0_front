import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usuario:'',
  status: 'offline',
}

export const loginSlice = createSlice({
  name: 'loginStatus',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = "login";
      console.log("status cambiado a login")
    },
    logout: (state, action) => {
        state.status = "offline";
    },

    
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
