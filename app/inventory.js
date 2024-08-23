import { Stack } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import Inventory from "../components/inventory/Inventory";

export default function InventoryHome() {
  return (
    <View className="w-full min-h-full justify-center items-center">
      <Stack.Screen
        options={{
          headerTitle: "Inventarios",
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full h-full"
      >
        <Inventory />
      </ScrollView>
    </View>
  );
}
