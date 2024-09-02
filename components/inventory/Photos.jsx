import { View , Pressable, Image} from "react-native";
import { CameraIcon } from "../Icons";
import * as ImagePicker from "expo-image-picker";
import { URLbase } from '../../config';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addPhoto } from "../../redux/slices/inputs/inventorySlice";



export default function Photos({name}) {

  const [ file, setFile ] = useState('');
  
  const dispatch = useDispatch();

  const pickImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", `El acceso a la galería es requerido`);
    } else {
      const result = await ImagePicker.launchCameraAsync();
      setFile(result)
      dispatch(addPhoto({name, result: result.assets[0].uri}))
    }
  }


  return (
    <View className="w-full flex-row justify-around items-center">

      {file ? (
                  <View className="flex flex-row h-rounded-md gap-5 items-center justify-center">                              
                                      
                      <Pressable className='bg-alnago-1 p-2 rounded-2xl' onPress={pickImage}>  
                        <CameraIcon color="rgb(0,0,0)" />  
                      </Pressable>
                  </View>
              ) 
            : (
                  <Pressable className='bg-alnago-1 p-2 rounded-2xl' onPress={pickImage}>  
                    <CameraIcon color="rgb(0,0,0)" />  
                  </Pressable>
              )}

      
      
    </View>
  );
}
