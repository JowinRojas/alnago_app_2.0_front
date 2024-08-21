import { Camera, CameraType, FlashMode } from "expo-camera/legacy";
import { useState } from "react";
import { Alert, Button, Pressable, StyleSheet, Text, View } from "react-native";
import { ChangeCamIcon } from "./Icons";
import { CameraView } from "expo-camera";

export default function Cam() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [flash, setFlash] = useState(FlashMode.off);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>Se requiere el uso de la cámara</Text>
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
    setFlash((current) =>
      current === FlashMode.off ? FlashMode.on : FlashMode.off
    );
  }

  function message() {
    Alert.alert("Aviso", "Estás activando el flash");
  }

  return (
    <View className="flex-1 w-full h-full border-2 border-red-600">
      <CameraView className="flex-1" type={type}>
        <Pressable onPress={toggleCameraType}>
          <ChangeCamIcon />
        </Pressable>
      </CameraView>
    </View>
  );
}
