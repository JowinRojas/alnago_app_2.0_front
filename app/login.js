import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import logo from "../assets/images/logotipo_negro.png";

export default function Login() {

  return(

    <View className ="w-full h-full bg-alnago-1 justify-center items-center">

      <Image source={logo} className="w-48 h-36 "/>

      <Link asChild href="/" className="mt-10">
          <Pressable>
            <Text className="text-alnago-2 text-lg">Ingresar</Text>
          </Pressable>
        </Link>

    </View>

  );

}