import { createSlice } from "@reduxjs/toolkit";

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
        // console.log(item);
        if (item.name === payload.payload.name) {
          item.fotos.push(payload.payload.result);
        }
      });
    },
    addVideo: (state, payload) => {
      state.map((item) => {
        // console.log(item);
        if (item.name === payload.payload.name) {
          item.videos.push(payload.payload.result);
        }
      });
    },
  },
});

export const { openStatus, closeStatus, addPhoto, addVideo } = inventorySlice.actions;

export default inventorySlice.reducer;
