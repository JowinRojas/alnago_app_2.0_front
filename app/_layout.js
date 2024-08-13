import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";

export default function Layout() {
  return (
    <View className="flex-1">
      <StatusBar barStyle={'light-content'} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "rgb(33, 25, 21)" },
          headerTitleAlign: "center",
          headerTitle: "Inicio de sesión",
          headerTintColor: "rgb(241, 209, 43)",
          headerTitleStyle: {
            fontSize: 23,
          },
        }}
      />
    </View>
  );
}
