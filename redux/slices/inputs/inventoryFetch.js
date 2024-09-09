import { URLbase } from "../../../config";

export const sendInv = async ( fotos ) => {
    
    const data = new FormData();

    // Añadir cada foto al FormData
    for (let i = 0; i < fotos.length; i++) {
      data.append('fotos', fotos[i]);
    }

    try {
      const response = await fetch(`${URLbase}/google/images`,{
          method: 'POST',
          body: data,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          }    
      )
      if(response) return;

    } catch(error) {
      console.log(error)
    }

}
