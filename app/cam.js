import { Text, View } from "react-native";
import Cam from "../components/Cam";
import { Stack } from "expo-router";

export default function CamHome() {
  return (
    <View className="w-full h-5/6 justify-center items-center">
      <Stack.Screen
        options={{
          headerShown: true,
        }}
      />
      <Cam />
    </View>
  );
}
