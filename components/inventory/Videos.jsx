import { View, Pressable } from "react-native";
import { VideoIcon } from "../Icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addVideo } from "../../redux/slices/inputs/inventorySlice";
import { Link } from "expo-router";

export default function Videos({ name }) {
  const [file, setFile] = useState("");

  const dispatch = useDispatch();

  const pickImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", `El acceso a la galería es requerido`);
    } else {
      const result = await ImagePicker.launchCameraAsync();
      setFile(result);
      dispatch(addVideo({ name, result: result.assets[0].uri }));
    }
  };

  return (
    <Link asChild href={"/video"}>
      <Pressable className="w-20 h-20 bg-alnago-1 p-1 rounded-3xl justify-center items-center mx-1 my-3">
        <VideoIcon color="rgb(0,0,0)" />
      </Pressable>
    </Link>
  );
}
