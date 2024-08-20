import { Text, View } from "react-native";
import Cam from "../components/Cam";
import { Stack } from "expo-router";

export default function CamHome() {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
        }}
      />
      <Text>
        <Cam />;
      </Text>
    </View>
  );
}
