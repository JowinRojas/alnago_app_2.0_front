import { Pressable } from "react-native";
import { CameraIcon } from "../Icons";
import * as ImagePicker from "expo-image-picker";

import { useDispatch } from "react-redux";
import { addPhoto } from "../../redux/slices/inputs/inventorySlice";

export default function Photos({ name }) {

  const dispatch = useDispatch();

  const pickImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", `El acceso a la galería es requerido`);
    } else {
      const result = await ImagePicker.launchCameraAsync();
      dispatch(addPhoto({ name, result: result.assets[0].uri }));
    }
  };

  return (
    <Pressable className="w-20 h-20 bg-alnago-1 p-1 rounded-3xl justify-center items-center mx-1 my-3" onPress={pickImage}>
      <CameraIcon color="rgb(0,0,0)" />
    </Pressable>
  );
}
