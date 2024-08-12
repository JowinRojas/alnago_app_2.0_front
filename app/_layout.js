import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Layout() {
  return (
    <View className = "flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "rgb(241, 209, 43)"},
          headerTitleAlign: "center",
          headerTintColor: "rgb(33, 25, 21)",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
          },
          headerLeft: () => (
            <Text>Izq</Text>
          ),
          headerRight: () => (
            <Text>Der</Text>
          )
        }}
      />
    </View>
  );
}
