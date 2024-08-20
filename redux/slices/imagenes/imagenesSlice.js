import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imagen:'',
}

export const imagenesSlice = createSlice({
  name: 'imagenes',
  initialState,
  reducers: {
    mandarAlgo: (state, action) => {

      state.imagen = action.payload;

    }
    
  },
});

export const { mandarAlgo } = imagenesSlice.actions;

export default imagenesSlice.reducer;
