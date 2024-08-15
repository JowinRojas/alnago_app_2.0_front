import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { CameraType } from "expo-camera/build/legacy/Camera.types";

const Stack = createNativeStackNavigator();

export default function App() {
  const [hasCameraPermissions, setHasCameraPermissions] = useState(false);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(camera);

  return (
    <SafeAreaProvider>
      <View>
        <StatusBar style="auto"></StatusBar>
        <Menu />
      </View>
    </SafeAreaProvider>
  );
}
