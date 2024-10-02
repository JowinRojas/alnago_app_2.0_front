import { Alert, Image, Modal, Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import {
  closeStatus,
  openStatus,
  deletePhoto,
  deleteVideo,
} from "../../redux/slices/inputs/inventorySlice";
import Photos from "./Photos";
import {
  CheckGreenIcon,
  CheckRedIcon,
  DownArrowIcon,
  TrashIcon,
  UpArrowIcon,
} from "../Icons";
import { Comment } from "./Comment";
import { useState } from "react";
import Videos from "./Videos";
import { Video } from "expo-av";

const InventoryItem = ({ name, status, fotos, videos, detalles }) => {
  const dispatch = useDispatch();
  const [foto, setFoto] = useState("");
  const [video, setVideo] = useState("");
  const [preview, setPreview] = useState(false);

  const abrir_cerrar = () => {
    status ? dispatch(closeStatus(name)) : dispatch(openStatus(name));
  };

  const deletefoto = (file) => {
    Alert.alert("Eliminar", "¿Eliminar la foto?", [
      {
        text: "Si",
        onPress: () => {
          dispatch(deletePhoto({ file }));
          setPreview(false);
        },
      },
      { text: "No", style: "cancel" },
    ]);
  };

  const deleteVid = (file) => {
    Alert.alert("Eliminar", "¿Eliminar el video?", [
      {
        text: "Si",
        onPress: () => {
          dispatch(deleteVideo({ file }));
          setPreview(false);
        },
      },
      { text: "No", style: "cancel" },
    ]);
  };

  const previewItem = (file, tipo) => {
    if (tipo === "foto"){
      setFoto(file);
    }else{
      setVideo(file);
    }
    setPreview(true);
  };


  return (
    <View className="w-11/12 h-auto border rounded-3xl p-2 my-2">
      <Modal
        animationType="fade"
        transparent={true}
        visible={preview}
        onRequestClose={() => {setPreview(false), setFoto(""), setVideo("")}}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="w-full max-w-md bg-white p-1 rounded-lg items-center">
            <Image
              source={{ uri: foto? foto : video }}
              style={{ aspectRatio: 3 / 4 }}
              className="w-full rounded-lg"
            />
            <Pressable
              className="absolute right-0 mt-2 mr-5"
              onPress={() => setPreview(false)}
            >
              <Text className={`text-gray-100 text-3xl`}>&times;</Text>
            </Pressable>
            <Pressable
              className="absolute bottom-0 m-4 "
              onPress={() => foto ? deletefoto(foto) : deleteVid(video)}
            >
              <TrashIcon color="red" />
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={abrir_cerrar}>
        <View className="w-full h-12 flex-row bg-alnago-1 px-2 rounded-2xl items-center justify-between">
          <View className="p-1">
            {status ? <UpArrowIcon /> : <DownArrowIcon />}
          </View>
          <Text className="text-2xl font-bold text-black">{name}</Text>
          <View>{fotos != "" ? <CheckGreenIcon /> : <CheckRedIcon />}</View>
        </View>
      </Pressable>

      {status ? (
        <View className="w-full">
          <View className="flex-row flex-wrap items-center justify-center">
            {fotos?.map((item) => (
              <Pressable
                key={"foto" + item}
                onPress={() => {
                  previewItem(item, tipo="foto");
                }}
              >
                <Image
                  source={{ uri: item }}
                  className="w-20 h-20 object-cover rounded-3xl mx-1 my-3"
                />
              </Pressable>
            ))}
            <Photos name={name} />
          </View>

          <View className="flex-row flex-wrap items-center justify-center">
            {videos?.map((item) => (
              <Pressable
                key={"video" + item}
                onPress={() => {
                  previewItem(item, tipo="video");
                }}
              >
                <Image
                  source={{ uri: item }}
                  className="w-20 h-20 object-cover rounded-3xl mx-1 my-3"
                />
              </Pressable>
            ))}
            <Videos name={name} />
          </View>

          <View className="w-full flex items-center justify-center">
            <Text className="text-xl">Comentarios</Text>
            <Text className="text-base">{detalles}</Text>
          </View>

          <Comment name={name} />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default InventoryItem;
