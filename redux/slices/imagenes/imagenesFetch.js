import { mandarAlgo } from "./imagenesSlice";

export const mandarSomething = (payload) => async (dispatch) => {
    
    try {
        await fetch("http://192.168.1.197:4000/prueba")
        .then( response => response.json())
        .then( post => dispatch(mandarAlgo(post)))

    } catch (error) {
        console.log(error)
    }
  };
