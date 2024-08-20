import { mandarAlgo } from "./imagenesSlice";

export const mandarSomething = (payload) => async (dispatch) => {
    
    try {
        const algo = await fetch("http://localhost:4000/prueba");

        dispatch(mandarAlgo(algo))

    } catch (error) {
        console.log(error)
    }
  };