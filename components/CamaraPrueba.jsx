import React, { useRef, useState } from 'react';
import { Text, View , Pressable, Image} from 'react-native';
import { CameraView } from 'expo-camera';
import * as ImagePicker from "expo-image-picker";


const CamaraPrueba = () => {
  
  const [ arroz, setArroz ] = useState('')

  const pickImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission Denied", `El acceso a la galería es requerido`);
    } else {
      const result = await ImagePicker.launchCameraAsync();
      console.log(result)
      setArroz(result)
    }
  }



  return (
    <View className='w-screen h-screen flex-col items-center justify-center gap-10'>
      
      <Pressable className='bg-black' onPress={pickImage}>  
        <Text className='text-2xl text-white p-10'>
          Alo
        </Text>   
      </Pressable>

      <View className="w-80 h-80 rounded-md bg-gray-200 items-center justify-center overflow-hidden">
                {arroz ? (
                <Image
                    source={{ uri: arroz.assets[0].uri }}
                    className="w-full h-full object-cover"
                  />
                ) 
                : (
                  <Text> aca va el arroz </Text>
                )}
        </View>

    </View>
  )
}

export default CamaraPrueba;