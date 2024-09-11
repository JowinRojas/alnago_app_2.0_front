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

  //---------Mandar Al Back---------
  const sendImage = async (ev) => {
    ev.preventDefault();
    const data = new FormData;

    data.append('file', {
      uri: file.assets[0].uri,
      name: 'photo.jpg',
      type: 'image/jpeg',
    });
    data.append('arroz', 'aca va el contenido del arroz')

    const response = await fetch(`${URLbase}/google/image`,{
        method: 'POST',
        body: data,
        credentials: 'include',
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
        }    
    )


}
