import {configureStore} from "@reduxjs/toolkit";

//Slices
import imagenesSlice from "./slices/imagenes/imagenesSlice.js";


export const store = configureStore({
    reducer:{
        imagenes: imagenesSlice,
    },
})


