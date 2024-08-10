import { View, Text } from "react-native";
import { Link } from "expo-router";

export function Main() {

  return(
    <>
      <View className="flex w-full h-full justify-center items-center">

        <Text>Main</Text>

        <Link href="/login" className="mt-10">
          <View className="flex w-20 h-10 bg-alnago-2 justify-center items-center rounded">
            <Text className="text-white">Ir a Login</Text>
          </View>
        </Link>

      </View>
    </>
  )
  
}