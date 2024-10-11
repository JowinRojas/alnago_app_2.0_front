import { Alert } from "react-native";
import { URLbase } from "../../../config";
import * as SecureStore from 'expo-secure-store';



export const sendInv = async ({
  fotos,
  videos,
  comentarios,
  direccionInventario,
}) => {

  const token = await SecureStore.getItemAsync('token');
  const data = new FormData();
  console.log(token)
  fotos.map((foto) =>
    data.append("fotos", { uri: foto, name: "photito.jpg", type: "image/jpeg" })
  );


  if (videos) {
    videos.map((video) => {
      console.log("Video URI: ", video);
      data.append("videos", {
        uri: video,
        name: "video.mp4",
        type: "video/mp4",
      });
    });
  }
  data.append("comentarios", comentarios);
  data.append("direccion", direccionInventario);

  try {
    console.log(data)
    const response = await fetch(`${URLbase}/google/images`, {
      method: "POST",
      body: data,
      credentials: "include",
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': `${token}`,
      },
    });
    console.log(response)
  } catch (error) {
    console.log("Error: ", error);
  }
};
