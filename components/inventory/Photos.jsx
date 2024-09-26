import { Modal, Pressable, Text, View } from "react-native";
import { CameraIcon, UploadIcon } from "../Icons";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { addPhoto } from "../../redux/slices/inputs/inventorySlice";
import { useState } from "react";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function Photos({ name }) {
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", `El acceso a la galería es requerido`);
    } else {
      const result = await ImagePicker.launchCameraAsync();
      dispatch(addPhoto({ name, result: result.assets[0].uri }));
    }
  };

  const selectImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      allowsMultipleSelection: true,
    });

    // Si el usuario no cancela, agregar la URI de la imagen al estado
    if (!result.canceled) {
      setImages((prevImages) => [...prevImages, result.assets[0].uri]);
    }
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalShow}
        onRequestClose={() => setModalShow(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white p-6 rounded-lg w-96">
            <Pressable
              onPress={() => setModalShow(false)}
              style={{
                position: "absolute",
                top: 0,
                right: 10,
                padding: 10,

              }}
            >
              <Text className={`text-gray-600 text-3xl`}>&times;</Text>
            </Pressable>
            <View className="flex-row justify-around">
              <Pressable
                className="w-20 h-20 bg-alnago-1 p-1 rounded-3xl justify-center items-center mx-1 my-3 active:opacity-80 active:scale-90"
                onPress={pickImage}
              >
                <CameraIcon color="rgb(0,0,0)" />
              </Pressable>

              <Pressable
                className="w-20 h-20 bg-alnago-1 p-1 rounded-3xl justify-center items-center mx-1 my-3 active:opacity-80 active:scale-90"
                onPress={selectImages}
              >
                <UploadIcon />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <StyledPressable
        className="w-20 h-20 bg-alnago-1 p-1 rounded-3xl justify-center items-center mx-1 my-3 active:opacity-80 active:scale-90"
        onPress={() => setModalShow(true)}
      >
        <CameraIcon color="rgb(0,0,0)" />
      </StyledPressable>
    </View>
  );
}
