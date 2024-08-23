import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  puertaPrincipal: false,
  cocina: false,
  sala: false,
}

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {

    //----------
    openPuertaPrincipal: (state) => {
      state.puertaPrincipal = true;
    },
    closePuertaPrincipal: (state)=>{
        state.puertaPrincipal = false
    },

    //--------------
    openCocina: (state) => {
        state.cocina = true;
    },
    closeCocina: (state)=>{
          state.cocina = false
    },

    //-----------------
    openSala: (state) => {
        state.sala = true;
    },
    closeSala: (state)=>{
          state.sala = false
    },
    
  },
});

export const { 
  openPuertaPrincipal,
  closePuertaPrincipal,
  openCocina,
  closeCocina
 } = inventorySlice.actions;

export default inventorySlice.reducer;
