import { Link, Stack } from "expo-router";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { SingInIcon } from "../../components/Icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin, loginFetch } from "../../redux/slices/login/loginController";
import { useNavigation } from "@react-navigation/native";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);


export default function Login() {

  const navigation = useNavigation();

  const status = useSelector((state) => state.loginStatus.status);

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {

    dispatch(checkLogin());
    
    if (status=="login") {
      navigation.navigate("home");
    }
  }, [status]);


  const loginForm = () => {
    const data = {
      email,
      password,
    };
    dispatch(loginFetch(data));
  };


  return (
    <View className="flex-1 bg-alnago-1 justify-center items-center">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="w-full h-full justify-center items-center">
        <Image
          source={require("../../assets/images/logotipo_negro.png")}
          className="w-72 h-52 my-16"
        />

        <View className="w-full justify-center items-center gap-4">
          <TextInput
            className="w-10/12 h-10 border-2 rounded-xl text-alnago-2 text-2xl px-2 py-1"
            placeholder="email"
            value={email}
            name="email"
            onChangeText={(text) => setEmail(text)}
          />          
          <TextInput
            name="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            className="w-10/12 h-10 border-2 rounded-xl text-alnago-2 text-2xl px-2 py-1"
            placeholder="Contraseña"
          />
        </View>


        <Link asChild href="./inventory" className="m-5">
          <StyledPressable className="flex-row justify-between items-center bg-alnago-2 rounded-md px-4 active:opacity-75 active:scale-90">
            <Text className="text-alnago-1 text-2xl p-1">Ingresar</Text>
            <SingInIcon />
          </StyledPressable>
        </Link>

         <Pressable onPress={()=>loginForm()} className="flex-row justify-between items-center bg-alnago-2 rounded-md px-4">
          <Text>Login</Text>
        </Pressable> 
      </View>
    </View>
  );
}
