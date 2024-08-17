import { Alert, Pressable, Text, View } from "react-native";
import { CameraIcon, VideoIcon } from "./Icons";

export default function Cam({icon}) {
  console.log("Icon: ", icon);
  if (icon === "cam") {
    return (
      <View>
        <Pressable>
          <CameraIcon />
        </Pressable>
      </View>
    );
  } else {
    return (
      <View>
        <Pressable>
          <VideoIcon />
        </Pressable>
      </View>
    );
  }
}
