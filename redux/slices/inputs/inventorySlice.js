import { createSlice } from "@reduxjs/toolkit";
import { sendInv } from "./inventoryFetch";

const initialState = {
  complete: false,
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
      state.complete = true;
      state.inventario.map((item) => {
        if (item.name === payload.payload.name) {
          item.fotos.push(payload.payload.result);
        }
      });
      state.inventario.map((item) => {
        item.fotos != ""
          ? (state.complete = state.complete && true)
          : (state.complete = false);
      });
    },

    deletePhoto: (state,payload) => {
      // console.log("deletePhoto: ",payload.payload.file);
      // console.log("deletePhoto: ",payload.payload.zona);

      // const lazona =  state.inventario.payload.payload.zona;

      // console.log("objeto: ",lazona )
    },

    addVideo: (state, payload) => {
      state.inventario.map((item) => {
        if (item.name === payload.payload.name) {
          item.videos.push(payload.payload.result);
        }
      });
    },

<<<<<<< HEAD
    sendInventory: () => {
=======
    sendInventory: (state) => {

>>>>>>> e9dc418891c88b886bc2cf17a7c7e2c8d9fd4e41
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

<<<<<<< HEAD
export const { openStatus, closeStatus, addPhoto, addVideo, deletePhoto, sendInventory } =
  inventorySlice.actions;
=======


export const { openStatus, closeStatus, addPhoto, addVideo, sendInventory } = inventorySlice.actions;
>>>>>>> e9dc418891c88b886bc2cf17a7c7e2c8d9fd4e41

export default inventorySlice.reducer;
