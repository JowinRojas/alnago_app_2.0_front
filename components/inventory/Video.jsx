import { CameraView, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";
import { Button, Pressable, Text, View } from "react-native";

export default function Video() {
  let cameraRef = useRef();
  const [facing, setFacing] = useState("back");
  const [mode, setMode] = useState("video");
  const [torch, setTorch] = useState(false);
  const [zoom, setZoom] = useState(0);
  const [videoQuality, setVideoQuality] = useState("4:3");
  const [permission, requestPermission] = useCameraPermissions();
  const [isRecording, setIsRecording] = useState(false);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleTorch() {
    setTorch((current) => (current === false ? true : false));
  }

  function toggleZoom() {
    setZoom((current) => (current === 0 ? 1 : 0));
  }

  let recordVideo = async () => {};

  return (
    <View className="flex-1">
      <CameraView
        ref={cameraRef}
        className="w-full h-4/6"
        facing={facing}
        mode={mode}
        enableTorch={torch}
        zoom={zoom}
        animateShutter={true}
        videoQuality={videoQuality}
      />
      <View className="flex-row flex-wrap justify-between">
        <Pressable onPress={toggleTorch}>
          <Text>{torch === false ? "Flash on" : "Flash off"}</Text>
        </Pressable>
        <Pressable onPress={recordVideo}>
          <Text>{!isRecording ? "Grabar" : "Parar"}</Text>
        </Pressable>
        <Pressable onPress={toggleZoom}>
          <Text>{zoom === 0 ? "Zoom in" : "zoom out"}</Text>
        </Pressable>
      </View>
    </View>
  );
}
