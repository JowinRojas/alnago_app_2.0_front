import { Link } from "expo-router";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { SingInIcon } from "../components/Icons";

export default function Login() {
  return (
    <View className="w-full min-h-full bg-alnago-1 justify-center items-center">
      <View className="w-full h-[430px] justify-between items-center">

        <View className="w-10/12 h-auto justify-center items-center">
          <Image
            source={require("../assets/images/logotipo_negro.png")}
            className="w-72 h-52"
          />
        </View>

        <View className="w-10/12 h- justify-center items-center mt-5">
          <View className="w-full h-auto  items-center gap-4">
            <TextInput
              className="w-10/12 h-10 border-2 rounded-xl text-alnago-2 text-2xl px-2 py-1"
              placeholder="Usuario"
            />
            <TextInput 
              textContentType="password"
              className="w-10/12 h-10 border-2 rounded-xl text-alnago-2 text-2xl px-2 py-1"
              placeholder="Contraseña"
            />

            <Link asChild href="./home">
              <Pressable className="flex-row justify-between items-center bg-alnago-2 rounded-md px-4">
                <Text className="text-alnago-1 text-2xl p-1">Ingresar</Text>
                <SingInIcon />
              </Pressable>
            </Link>
          </View>
        </View>

      </View>
    </View>
  );
}
