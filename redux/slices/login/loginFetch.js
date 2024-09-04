import { login } from "./loginSlice";
import { URLbase } from "../../../config";


export const loginFetch = (payload) => async (dispatch) => {
    console.log(payload)
    try {
        const response = await fetch(`${URLbase}/user/login`, {
            method: 'POST',            
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(payload),

        }).then(res => res.json())
        
        response == "contrasenha correcta" ? dispatch(login()) : null 

    } catch (error) {
        console.log(error)
    }
  };
