import { Link, Stack } from "expo-router";
import { Pressable, StatusBar, Text, View } from "react-native";
export default function Home() {
  return (
    <View className="w-full min-h-full">
      <StatusBar barStyle={'dark-content'} />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "rgb(241, 209, 43)" },
          headerTitle: "Calendario",
          headerTintColor: "rgb(33, 25, 21)"
        }}
      />
      <View className="w-full h-full justify-center items-center">
        <Text className="text-alnago-2 text-4xl">Home</Text>
        <Link asChild href="/">
          <Pressable className="border-2">
            <Text className="text-alnago-3 text-4xl mt-10">Regresar</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
