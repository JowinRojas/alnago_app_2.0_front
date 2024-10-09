import { login, logout } from "./loginSlice";
import { URLbase } from "../../../config";
import AsyncStorage from '@react-native-async-storage/async-storage';



// payload { email, password}
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

          const stringToken = response.token.toString();
            const storeData = async () => {
              try {
                await AsyncStorage.setItem('token', stringToken);
              } catch (e) {
                console.log(e)
              }
            };

            storeData();
            dispatch(login());
        }

    } catch (error) {
        console.log(error)
    }
  };



  export const checkLogin = () => async (dispatch) => {

    const token = await AsyncStorage.getItem('token');
     
    if(token){

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
    } else {
      dispatch(logout())
    }

  };

    export const logoutFetch = () => async (dispatch) => {
      
        try {
          await AsyncStorage.setItem('token', '');
          dispatch(logout());
        } catch (e) {
          console.log(e)
        }
      
    }

  // const response = await axios.get('http://tu-servidor.com/protected', {
  //   headers: {
  //     Authorization: token,
  //   },
  // });