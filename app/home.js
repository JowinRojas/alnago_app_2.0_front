import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="w-full min-h-full">
      <Stack.Screen
        options={{
          headerTitle: "Calendario",
        }}
      />
      <View className="w-full h-full justify-center items-center">
        <Text className="text-alnago-2 text-4xl">Calendario</Text>
      </View>
    </View>
  );
}
