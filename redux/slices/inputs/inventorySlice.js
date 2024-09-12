import { createSlice } from "@reduxjs/toolkit";
import { sendInv } from "./inventoryFetch";

const initialState = {
  complete: true,
  inventario: [
    {
      name: "Puerta Principal",
      status: false,
      fotos: [],
      videos: [],
      detalles: '',
    },
    {
      name: "Cocina",
      status: false,
      fotos: [],
      videos: [],
      detalles: '',
    },
    {
      name: "Habitaciones",
      status: false,
      fotos: [],
      videos: [],
      detalles: '',
    },
    {
      name: "Pasillo",
      status: false,
      fotos: [],
      videos: [],
      detalles: '',
    },
    {
      name: "Sala/Comedor",
      status: false,
      fotos: [],
      videos: [],
      detalles: '',
    },
    {
      name: "Baño",
      status: false,
      fotos: [],
      videos: [],
      detalles: '',
    },
    {
      name: "Pisos/Techos/Conexiones",
      status: false,
      fotos: [],
      videos: [],
      detalles: '',
    },
  ],
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    //----------
    openStatus: (state, props) => {
      state.inventario.map((item) =>
        item.name === props.payload ? (item.status = true) : true
      );
    },

    closeStatus: (state, payload) => {
      state.inventario.map((item) =>
        item.name === payload.payload ? (item.status = false) : false
      );
    },

    addPhoto: (state, payload) => {
      state.inventario.map((item) => {
        if (item.name === payload.payload.name) {
          item.fotos.push(payload.payload.result);
        }
      });
    },

    addVideo: (state, payload) => {
      state.inventario.map((item) => {
        if (item.name === payload.payload.name) {
          item.videos.push(payload.payload.result);
        }
      });
    },

    btnEnviar: (state, payload) => {
      let todasLasFotos = [];
      let completefotos = false;
      state.inventario.map((item) =>
        item.fotos.map((img) => todasLasFotos.push(img))
      );
      todasLasFotos?.map((item) => {
        
        item ? state.complete = state.complete && true : state.complete = false;
      });
     
    },

    sendInventory: (state) => {

      let todasLasFotos = [];
      let comentarios = '';

      state.inventario.map((item) =>
        item.fotos?.map((img) => todasLasFotos.push(img))
      );
      
      state.inventario.forEach( item => {
        comentarios += item.detalles + '@%' 
      })
      
      sendInv({fotos:todasLasFotos, comentarios});
      
    },

    addComment: (state, payload)=>{

      state.inventario.map((item) => {
        if (item.name === payload.payload.name) {
          item.detalles = payload.payload.detalles;
        }
      });
    },



  },
});

export const {
  openStatus,
  closeStatus,
  addPhoto,
  addVideo,
  sendInventory,
  btnEnviar,
  addComment,
} = inventorySlice.actions;

export default inventorySlice.reducer;
