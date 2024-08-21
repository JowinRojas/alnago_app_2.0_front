import { Camera, CameraType, FlashMode } from "expo-camera/legacy";
import { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ChangeCamIcon } from "./Icons";

export default function Cam() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [ flash, setFlash ] = useState(FlashMode.off);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          Se requiere el uso de la cámara
        </Text>
        <Button onPress={requestPermission} title="Permitir" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  function toggleFlash() {
    setType((current) =>
      current === FlashMode.off? FlashMode.on : FlashMode.off
    );
  }

  return (
    <View className="flex-1 w-full h-full border-2 border-red-600">
      <Camera style={styles.camera} type={type} >
        </Camera>
        <View>
          <Pressable onPress={toggleFlash}>
            <ChangeCamIcon />
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
