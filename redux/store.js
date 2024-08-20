import {configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import imagenesSlice from "./imagenes/imagenesSlice.js";


const store = configureStore({
    reducer:{
        imagenes: imagenesSlice,
    },
    middleware: [thunk]
})

export default store;
