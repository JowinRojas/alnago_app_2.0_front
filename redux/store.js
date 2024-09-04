import {configureStore} from "@reduxjs/toolkit";

//Slices
import imagenesSlice from "./slices/imagenes/imagenesSlice.js";
import inventorySlice from "./slices/inputs/inventorySlice.js";
import loginSlice from "./slices/login/loginSlice.js";


export const store = configureStore({
    reducer:{
        imagenes: imagenesSlice,
        inventory: inventorySlice,
        loginStatus: loginSlice,
    },
})


