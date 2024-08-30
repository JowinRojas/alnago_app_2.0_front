import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { 
    name: "puertaPrincipal",
    status: true,
    fotos: ["1"],
    video:  ["1"],
  },
  { 
    name: "cocina",
    status: false,
    fotos: ["2"],
    video:  ["2"],
  },
  { 
    name: "sala",
    status: true,
    fotos: ["3"],
    video:  ["3"],
  },
  { 
    name: "ejemplo",
    status: true,
    fotos: ["4"],
    video:  ["4"],
  },
  { 
    name: "ejemplo2",
    status: true,
    fotos: ["6"],
    video:  ["6"],
  }]

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {

    //----------
    openStatus: (state, payload) => {
        
        state.map( item => item.name === payload.payload ? item.status = true : true )
    },
    closeStatus: (state, payload)=>{

      state.map( item => item.name === payload.payload? item.status = false : false )
    },
    
  },
});

export const { 
  openStatus,
  closeStatus
 } = inventorySlice.actions;

export default inventorySlice.reducer;
