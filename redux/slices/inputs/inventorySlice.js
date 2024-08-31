import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { 
    name: "Puerta Principal",
    status: true,
    fotos: [],
    video:  [],
  },
  { 
    name: "Cocina",
    status: false,
    fotos: [],
    video:  [],
  },
  { 
    name: "Sala",
    status: true,
    fotos: [],
    video:  [],
  }]

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {

    //----------
    openStatus: (state, props) => {
        
        state.map( item => item.name === props.payload ? item.status = true : true )
    },
    closeStatus: (state, payload)=>{

      state.map( item => item.name === payload.payload? item.status = false : false )
    },
    addPhoto: (state, payload)=>{

      state.map(( item )=>{
        if(item.name == payload.payload.name){
          item.fotos.push(payload.payload.result) 
        }
      })

      // state.map( item => item.name == payload.payload.name  
      //     ? console.log("no agrego")
      //     : item.fotos.push(payload.payload.result) 
      //     )  
      
    },
    
  },
});

export const { 
  openStatus,
  closeStatus,
  addPhoto,
 } = inventorySlice.actions;

export default inventorySlice.reducer;
