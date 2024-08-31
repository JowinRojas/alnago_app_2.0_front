import { Link, Stack } from "expo-router";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { SingInIcon } from "../components/Icons";

export default function Login() {
  return (
    <View className="flex-1 bg-alnago-1 justify-center items-center">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="w-full h-full justify-center items-center">
        <Image
          source={require("../assets/images/logotipo_negro.png")}
          className="w-72 h-52 my-16"
        />

        <View className="w-full justify-center items-center gap-4">
          <TextInput
            className="w-10/12 h-10 border-2 rounded-xl text-alnago-2 text-2xl px-2 py-1"
            placeholder="Usuario"
          />
          <TextInput
            secureTextEntry
            className="w-10/12 h-10 border-2 rounded-xl text-alnago-2 text-2xl px-2 py-1"
            placeholder="Contraseña"
          />
        </View>

        <Link asChild href="./home" className="m-5">
          <Pressable className="flex-row justify-between items-center bg-alnago-2 rounded-md px-4">
            <Text className="text-alnago-1 text-2xl p-1">Ingresar</Text>
            <SingInIcon />
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
