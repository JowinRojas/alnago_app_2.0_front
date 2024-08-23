import { Camera, CameraType, FlashMode } from "expo-camera/legacy";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CameraIcon, ChangeCamIcon, FlashIcon, VideoIcon } from "./inventory/Icons";
import { CameraView } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default function Cam() {

  const [type, setType] = useState(CameraType.back);
  const [hasCameraPermission, setHasCameraPermission] =
    Camera.useCameraPermissions();
  const [flash, setFlash] = useState(FlashMode.off);
  const [micro, requestMicro] = Camera.useMicrophonePermissions();
  let cameraRef = useRef();
  const [hasLibraryPermission, setHasLibraryPermission] = useState();

  useEffect(() => {
    (async () => {
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (!hasCameraPermission) {
    return <View />;
  }

  if (!hasCameraPermission.granted) {
    return (
      <View>
        <Text>Se requiere el uso de la cámara</Text>
        <Button onPress={setHasCameraPermission} title="Permitir" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  function takephoto() {
    Alert.alert("Captura realizada", "Imagen guardada en la biblioteca");
  }

  function toggleFlash() {
    setFlash((current) =>
      current === FlashMode.off ? FlashMode.on : FlashMode.off
    );
  }

  return (
    <View className="flex-1 w-full h-full justify-between">
      <View className="w-full h-5/6 border-2">
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <ChangeCamIcon color="rgb(241,209,43)" />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
      <View className="flex-row w-full h-1/6 justify-around items-center bg-black">
        <Pressable onPress={toggleCameraType}>
          <VideoIcon color="rgb(241,209,43)" />
        </Pressable>

        <Pressable onPress={takephoto}>
          <CameraIcon color="rgb(241,209,43)" />
        </Pressable>

        <Pressable onPress={toggleFlash}>
          <FlashIcon color="rgb(241,209,43)" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
