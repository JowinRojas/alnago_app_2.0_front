import { View, Pressable, Modal, Text } from "react-native";
import { UploadIcon, VideoIcon } from "../Icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addVideo } from "../../redux/slices/inputs/inventorySlice";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function Videos({ name }) {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  const pickVideo = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", `El acceso a la galería es requerido`);
    } else {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        quality: 1,
      });
      setVideo(result.assets[0].uri);
      console.log("video: ", video)
      dispatch(addVideo({ name, result: video }));
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
      result.assets.forEach((element) => {
        dispatch(addVideo({ name, result: element.uri }));
      });
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
              <View className="items-center justify-between">
                <Pressable
                  className="w-20 h-20 bg-alnago-1 p-1 rounded-3xl justify-center items-center mx-1 my-3 active:opacity-80 active:scale-90"
                  onPress={pickVideo}
                >
                  <VideoIcon color="rgb(0,0,0)" />
                </Pressable>
                <Text className="text-lg">Tomar video</Text>
              </View>

              <View className="items-center justify-between">
                <Pressable
                  className="w-20 h-20 bg-alnago-1 p-1 rounded-3xl justify-center items-center mx-1 my-3 active:opacity-80 active:scale-90"
                  onPress={selectVideos}
                >
                  <UploadIcon />
                </Pressable>
                <Text className="text-lg">Subir video</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <StyledPressable
        className="w-20 h-20 bg-alnago-1 p-1 rounded-3xl justify-center items-center mx-1 my-3 active:opacity-80 active:scale-90"
        onPress={() => setModalShow(true)}
      >
        <VideoIcon color="rgb(0,0,0)" />
      </StyledPressable>
    </View>
  );
}
