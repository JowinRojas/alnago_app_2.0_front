import { Text, TextInput, View } from "react-native";
import Cam from "./Cam";

export default function Photo() {
  return (
    <>
      <TextInput
        placeholder="Fotos"
        className="w-5/6 border-2 rounded-2xl px-2"
      />
      <Cam icon={"cam"}  />
    </>
  );
}
