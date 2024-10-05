import { login, logout } from "./loginSlice";
import { URLbase } from "../../../config";
import AsyncStorage from '@react-native-async-storage/async-storage';


// payload { username, password}
export const loginFetch = (payload) => async (dispatch) => {
    
    try {
        const response = await fetch(`${URLbase}/user/login`, {
            method: 'POST',            
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(payload),

        }).then(res => res.json());

        if(response){
            const jsonValue = JSON.stringify(response);
            await AsyncStorage.setItem('token', jsonValue);      
            dispatch(login());
        }

    } catch (error) {
        console.log(error)
    }
  };



  export const checkLogin = () => async (dispatch) => {


    const getToken = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('token');
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
         console.log(e)
        }
      };
    const token = getToken();
    

    try {

        const response = await fetch(`${URLbase}/user/check`, {
            method: 'POST',            
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({token}),

        }).then(res => res.json());
        // que devuelve el jwt verify ?=> { username, login:true }
        response.login ?  dispatch(login()) : dispatch(logout());

    } catch (error) {
        console.log(error)
    }
  };


  const response = await axios.get('http://tu-servidor.com/protected', {
    headers: {
      Authorization: token,
    },
  });