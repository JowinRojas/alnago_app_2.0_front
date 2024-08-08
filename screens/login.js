import { StyleSheet, Text, View, Pressable, Image } from "react-native";

export default function Login({ navigation }) {
  return (
    <View className="flex-1 w-full h-full bg-alnago-1">
      <View className="flex w-full h-full justify-center items-center">
        <Image
          source={"assets/images/logotipo_negro.png"}
          className="flex w-100 h-100 border-2 border-red-500"
        />
        <Pressable
          onPress={() => navigation.navigate("home")}
          className="bg-alnago-2 w-24 h-10 justify-center items-center"
        >
          <Text className="flex text-white">Ir a Home</Text>
        </Pressable>
      </View>
    </View>
  );
}
