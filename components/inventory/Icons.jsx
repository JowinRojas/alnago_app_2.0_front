import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from '@expo/vector-icons/Entypo';

import { Image } from "react-native";

export const LogoTecho = (props) => (
  <Image
    source={require("../../assets/images/techo_negro.png")}
    className="w-12 h-7"
  />
);

export const SingInIcon = (props) => (
  <AntDesign name="login" size={22} color="rgb(241,209,43)" {...props} />
);

export const OpenMenuIcon = (props) => (
  <AntDesign name="menufold" size={28} color="rgb(33, 25, 21)" {...props} />
);

export const DownArrowIcon = (props) => (
  <AntDesign name="arrowdown" size={24} color="black" {...props} />
);

export const UpArrowIcon = (props) => (
  <AntDesign name="arrowup" size={24} color="black" {...props} />
);

export const CheckGreenIcon = (props) => (
  <AntDesign name="checkcircle" size={24} color="green" {...props} />
);

export const CheckRedIcon = (props) => (
  <AntDesign name="minuscircle" size={24} color="red" {...props} />
);

export const CameraIcon = (props) => (
  <AntDesign name="camera" size={40} color={props.color} />
);

export const VideoIcon = (props) => (
  <AntDesign name="videocamera" size={40} color={props.color} />
);

export const ChangeCamIcon = (props) => (
  <AntDesign name="retweet" size={40} color={props.color} />
);

export const FlashIcon = (props) => (
  <Entypo name="flash" size={40} color={props.color} />
);