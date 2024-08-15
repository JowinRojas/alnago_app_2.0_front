import { Stack } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import Inventory from "../components/Inventory";

export default function InventoryHome() {
  return (
    <View className="w-full min-h-full justify-center items-center">
      <Stack.Screen
        options={{
          headerTitle: "Inventarios",
        }}
      />
      <View className="w-full h-full justify-center items-center">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Inventory />
        </ScrollView>
      </View>
    </View>
  );
}
