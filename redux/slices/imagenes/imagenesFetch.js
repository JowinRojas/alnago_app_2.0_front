import { mandarAlgo } from "./imagenesSlice";
import { URLbase } from "../../../config";



export const mandarSomething = (payload) => async (dispatch) => {
    
    try {
        await fetch(`${URLbase}/prueba`)
        .then( response => response.json())
        .then( post => dispatch(mandarAlgo(post)))

    } catch (error) {
        console.log(error)
    }
  };
