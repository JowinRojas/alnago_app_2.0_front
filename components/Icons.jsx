import AntDesign from "@expo/vector-icons/AntDesign";
import { Image } from "react-native";

export const LogoTecho = (props) => (
  <Image
    source={require("../assets/images/techo_negro.png")}
    className="w-12 h-7"
  />
);

export const SingInIcon = (props) => (
  <AntDesign name="login" size={22} color="rgb(241,209,43)" {...props} />
);

export const OpenMenuIcon = (props) => (
  <AntDesign name="menufold" size={28} color="rgb(33, 25, 21)" {...props} />
);
