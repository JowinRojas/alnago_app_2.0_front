import { createSlice } from "@reduxjs/toolkit";
import { sendInv } from "./inventoryFetch";

const initialState = [
  {
    name: "Puerta Principal",
    status: false,
    fotos: [],
    videos: [],
    detalles: [],
  },
  {
    name: "Cocina",
    status: false,
    fotos: [],
    videos: [],
    detalles: [],
  },
  {
    name: "Habitaciones", 
    status: false,
    fotos: [],
    videos: [],
    detalles: [],
  },
  {
    name: "Pasillo",
    status: false,
    fotos: [],
    videos: [],
    detalles: [],
  },
  {
    name: "Sala/Comedor",
    status: false,
    fotos: [],
    videos: [],
    detalles: [],
  },
  {
    name: "Baño",
    status: false,
    fotos: [],
    videos: [],
    detalles: [],
  },
  {
    name: "Pisos/Techos/Conexiones",
    status: false,
    fotos: [],
    videos: [],
    detalles: [],
  }
];

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    //----------
    openStatus: (state, props) => {
      state.map((item) =>
        item.name === props.payload ? (item.status = true) : true
      );
    },
    closeStatus: (state, payload) => {
      state.map((item) =>
        item.name === payload.payload ? (item.status = false) : false
      );
    },
    addPhoto: (state, payload) => {
      state.map((item) => {
        
        if (item.name === payload.payload.name) {
          item.fotos.push(payload.payload.result);
        }
      });
    },
    addVideo: (state, payload) => {
      state.map((item) => {
        
        if (item.name === payload.payload.name) {
          item.videos.push(payload.payload.result);
        }
      });
    },
    sendInventory: (state) => {

      let todasLasFotos = [];

      state.map(item => item.fotos.map( img => todasLasFotos.push(img)))

      if(todasLasFotos) {
        
        sendInv(todasLasFotos)
        state = initialState;
      }
    },
  },
});

export const { openStatus, closeStatus, addPhoto, addVideo, sendInventory } = inventorySlice.actions;

export default inventorySlice.reducer;
