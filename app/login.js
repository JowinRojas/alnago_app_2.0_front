import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import logo from "../assets/images/logotipo_negro.png";

export default function Login() {

  return(

    <View className ="w-full h-full bg-alnago-1 justify-center items-center">

      <Image source={logo} className="w-48 h-36 "/>

      <Link href="/" className="mt-10">
          <View className="flex w-20 h-10 bg-alnago-2 justify-center items-center rounded">
            <Text className="text-white">Regresar</Text>
          </View>
        </Link>

    </View>

  );

}