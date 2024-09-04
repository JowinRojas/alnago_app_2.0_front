import { Link } from "expo-router";
import { Alert, Image, Pressable, Text, View } from "react-native";

export default function Rutas() {
  const createTwoButtonAlert = () =>
    Alert.alert("Confirmar", "¿Cerrar la sesión actual?", [
      {
        text: "Cancel",
      },
      { cancelable: false, text: "OK", onPress: () => (location = "/") },
    ]);

  return (
    <View className="w-full h-full bg-alnago-1 justify-center items-center">
      <View className="w-11/12 h-5/6 justify-between items-center py-5">
        <View className="w-52 h-52 items-center">
          <Image
            source={require("../assets/images/logo_circular_negro.png")}
            className="w-full h-full bg-contain"
          />
          <Text className="text-2xl">NOMBRE USUARIO</Text>
        </View>

        <View className="gap-y-5">
          {/* <Link asChild href="/home">
            <Pressable>
              <Text className="text-2xl">CALENDARIO</Text>
            </Pressable>
          </Link> */}
          {/* <Link asChild href="/home">
            <Pressable>
              <Text className="text-2xl">LLAVES</Text>
            </Pressable>
          </Link> */}
          <Link asChild href="/inventory">
            <Text className="text-2xl">INVENTARIOS</Text>
          </Link>
          {/* <Link asChild href="/prueba">
            <Pressable>
              <Text className="text-2xl">CONFIGURACIÓN</Text>
            </Pressable>
          </Link> */}
          {/* <Link asChild href="/users_form">
            <Pressable>
              <Text className="text-2xl">USUARIOS</Text>
            </Pressable>
          </Link> */}
        </View>

        {/* <Pressable onPress={createTwoButtonAlert}>
          <Text className="text-2xl">CERRAR SESIÓN</Text>
        </Pressable> */}
      </View>
    </View>
  );
}
