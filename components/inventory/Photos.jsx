import { View } from "react-native";
import { CameraIcon } from "../Icons";
import { Link } from "expo-router";

export default function Photos() {
  return (
    <View className="w-full flex-row justify-around items-center">
      <View className="w-8/12 h-14 border-2" />
      <Link href="/cam">
        <CameraIcon color="rgb(0,0,0) " />
      </Link>
    </View>
  );
}
