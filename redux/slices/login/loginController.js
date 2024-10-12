import { login, logout } from "./loginSlice";
import { URLbase } from "../../../config";
//import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from "expo-secure-store";

// payload { email, password}
export const loginFetch = (payload) => async (dispatch) => {
  const storeToken = async (token) => {
    await SecureStore.setItemAsync("token", token);
  };

  try {
    const response = await fetch(`${URLbase}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());

    if (response.token) {
      const stringToken = response.token.toString();
      const storeData = async () => {
        try {
          //await AsyncStorage.setItem('token', stringToken);
          storeToken(stringToken);
        } catch (e) {
          console.log(e);
        }
      };
      storeData();
      dispatch(login());
    }
  } catch (error) {
    console.log("Error: ",error);
  }
};

export const checkLogin = () => async (dispatch) => {
  //const token = await AsyncStorage.getItem('token');
  const token = await SecureStore.getItemAsync("token");

  if (token) {
    try {
      const response = await fetch(`${URLbase}/user/check`, {
        method: "POST",
        headers: {
          Authorization: `${token}`,
        },
        //body: JSON.stringify({token}),
      }).then((res) => res.json());
      // que devuelve el jwt verify ?=> { username, login:true }
      response.login ? dispatch(login()) : dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  } else {
    dispatch(logout());
  }
};

export const logoutFetch = () => async (dispatch) => {
  const storeToken = async (token) => {
    await SecureStore.setItemAsync("token", token);
  };
  try {
    //await AsyncStorage.setItem('token', '');
    storeToken("");
    dispatch(logout());
  } catch (e) {
    console.log(e);
  }
};

// const response = await axios.get('http://tu-servidor.com/protected', {
//   headers: {
//     Authorization: token,
//   },
// });
