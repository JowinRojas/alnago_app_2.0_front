import { Text, Pressable, View } from "react-native";
import { Link } from "expo-router";

export function Main() {
  return (
    <View className="flex w-full h-full justify-center items-center">
      <Text>Main</Text>

      <Link asChild href="/login" className="mt-10">
        <Pressable>
          <Text className="flex text-2xl text-black">Ir a Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}
