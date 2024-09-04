import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nombres:'',
  apellidos:'',
  documento:'',
  correo:'',
  fecha:'',
  id_tipo_doc:'',
  id_state:'',
  id_rol:'',
  id_sede:'',
  nombre:'',
}

export const user_form_slice = createSlice({
  name: 'imagenes',
  initialState,
  reducers: {
    mandarAlgo: (state, action) => {

      state.imagen = action.payload;

    }
    
  },
});

export const { mandarAlgo } = imagenesSlice.actions;

export default user_form_slice.reducer;
