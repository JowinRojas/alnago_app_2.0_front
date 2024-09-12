import { URLbase } from "../../../config";

export const sendInv = async ( fotos ) => {
    
    const data = new FormData();
    // Añadir cada foto al FormData
    // for (let i = 0; i < fotos.length; i++) {
    //   data.append('fotos', fotos[i]);
    // }
    fotos.map( foto => data.append('fotos', {uri:foto, name:'photito.jpg', type:'image/jpeg'}))

    try {
      const response = await fetch(`${URLbase}/google/images`,{
          method: 'POST',
          body: data,
          credentials: 'include',
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

export function complete(fotos) {
  console.log (fotos);
  const complete = false;
    fotos?.map((item) => {
      item.fotos!= "" ? complete=true : complete = false;
    });
    return complete;
}
