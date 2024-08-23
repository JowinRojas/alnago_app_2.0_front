import { View } from "react-native";
import { VideoIcon } from "./Icons";
import { Link } from "expo-router";

export default function Videos() {
  return (
    <View className="w-full flex-row justify-around items-center">
      <View className="w-8/12 h-14 border-2" />
      <Link href="/cam">
        <VideoIcon color="rgb(0,0,0) " />
      </Link>
    </View>
  );
}
