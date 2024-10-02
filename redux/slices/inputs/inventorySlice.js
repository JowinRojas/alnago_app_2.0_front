import { createSlice } from "@reduxjs/toolkit";
import { sendInv } from "./inventoryFetch";
import { Alert } from "react-native";

const initialState = {
  complete: false,
  direccion: "",
  inventario: [
    {
      name: "Puerta Principal",
      status: false,
      fotos: [],
      videos: [],
      detalles: "",
    },
    {
      name: "Cocina",
      status: false,
      fotos: [],
      videos: [],
      detalles: "",
    },
    {
      name: "Habitaciones",
      status: false,
      fotos: [],
      videos: [],
      detalles: "",
    },
    {
      name: "Pasillo",
      status: false,
      fotos: [],
      videos: [],
      detalles: "",
    },
    {
      name: "Sala/Comedor",
      status: false,
      fotos: [],
      videos: [],
      detalles: "",
    },
    {
      name: "Baño",
      status: false,
      fotos: [],
      videos: [],
      detalles: "",
    },
    {
      name: "Pisos/Techos/Conexiones",
      status: false,
      fotos: [],
      videos: [],
      detalles: "",
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

    deletePhoto: (state, payload) => {
      const urlPhoto = payload.payload.file;
      state.inventario.forEach((item) => {
        let pos = item.fotos.indexOf(urlPhoto);
        if (pos !== -1) {
          item.fotos.splice(pos, 1);
          Alert.alert("La foto fue eliminada");
        }
        if (item.fotos.length === 0) {
          state.complete = false;
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

    deleteVideo: (state, payload) => {
      const urlVideo = payload.payload.file;
      state.inventario.forEach((item) => {
        let pos = item.videos.indexOf(urlVideo);
        if (pos !== -1) {
          item.videos.splice(pos, 1);
          Alert.alert("El video fue eliminado");
        }
        if (item.videos.length === 0) {
          state.complete = false;
        }
      });
    },

    //-----------------
    sendInventory: (state, payload) => {
      let todasLasFotos = [];
      let comentarios = "";
      let direccionInventario = payload.payload.direccion;

      state.inventario.map((item) =>
        item.fotos?.map((img) => todasLasFotos.push(img))
      );

      state.inventario.forEach((item) => {
        comentarios += `<b>${item.name}</b>` + ": " + item.detalles + "@%";
      });

      sendInv({
        fotos: todasLasFotos,
        comentarios,
        direccionInventario,
      });
    },

    //-------------
    addComment: (state, payload) => {
      state.inventario.map((item) => {
        if (item.name === payload.payload.name) {
          item.detalles = payload.payload.detalles;
        }
      });
    },

    reset: (state, payload) => {
      state.complete = false;
      state.direccion = "";
      state.inventario.map((item) => {
        item.status = false;
        item.fotos = [];
        item.videos = [];
        item.detalles = "";
      });
    },
  },
});

export const {
  openStatus,
  closeStatus,
  addPhoto,
  addVideo,
  deletePhoto,
  deleteVideo,
  sendInventory,
  addComment,
  reset,
} = inventorySlice.actions;

export default inventorySlice.reducer;
