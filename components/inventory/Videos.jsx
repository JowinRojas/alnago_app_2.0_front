import { View, Pressable } from "react-native";
import { UploadIcon, VideoIcon } from "../Icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addVideo } from "../../redux/slices/inputs/inventorySlice";
import { Link } from "expo-router";

export default function Videos({ name }) {
  const [videos, setVideos] = useState([]);
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

  const selectVideos = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      setVideos([...setVideos, ...result.assets.map((asset) => asset.uri)]);
    }
  };

  return (
    <View>
      <Pressable
        className="w-20 h-20 bg-alnago-1 p-1 rounded-3xl justify-center items-center mx-1 my-3 active:opacity-80 active:scale-90"
        onPress={selectVideos}
      >
        <VideoIcon />
      </Pressable>
    </View>
  );
}
