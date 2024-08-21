import { Text, View } from "react-native";
import Cam from "../components/Cam";
import { Stack } from "expo-router";

export default function CamHome() {
  return (
    <View className="w-full h-full">
      <Stack.Screen options={{ headerTitle: "Cámara" }} />
      <Cam />
    </View>
  );
}
