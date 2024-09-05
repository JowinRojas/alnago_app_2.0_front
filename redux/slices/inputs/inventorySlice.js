import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Puerta Principal",
    status: false,
    fotos: [],
    video: [],
    detalles: [],
  },
  {
    name: "Cocina / Piso / Paredes",
    status: false,
    fotos: [],
    video: [],
    detalles: [],
  },
  {
    name: "Habitaciones / Piso / Paredes", 
    status: false,
    fotos: [],
    video: [],
    detalles: [],
  },
  {
    name: "Pasillo / Piso / Paredes",
    status: false,
    fotos: [],
    video: [],
    detalles: [],
  },
  {
    name: "Sala/Comedor/Zonas comunes",
    status: false,
    fotos: [],
    video: [],
    detalles: [],
  },
  {
    name: "Baño / Piso / Paredes",
    status: false,
    fotos: [],
    video: [],
    detalles: [],
  },
  {
    name: "Pisos / Techos / Conexiones",
    status: false,
    fotos: [],
    video: [],
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
        console.log(item);
        if (item.name === payload.payload.name) {
          item.fotos.push(payload.payload.result);
        }
      });
    },
  },
});

export const { openStatus, closeStatus, addPhoto } = inventorySlice.actions;

export default inventorySlice.reducer;
