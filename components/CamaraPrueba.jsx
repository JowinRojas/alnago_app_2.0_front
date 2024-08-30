import React, { useState } from 'react';
import { Text, View , Pressable, Image } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { URLbase } from '../config';

const CamaraPrueba = () => {
  
  const [ file, setFile ] = useState('');
  
  const pickImage = async () => {

    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {

      Alert.alert("Permission Denied", `El acceso a la galería es requerido`);

    } else {

      const result = await ImagePicker.launchCameraAsync();
      setFile(result)

    }
  }

  //---------Mandar Al Back---------

    const sendImage = async (ev) => {

        ev.preventDefault();

        const data = new FormData;
        
        data.append('file', {
          uri: file.assets[0].uri,
          name: 'photo.jpg',
          type: 'image/jpeg',
        });
        
        try {
          const response = await fetch(`${URLbase}/google/image`,{
              method: 'POST',
              body: data,
              }    
          )
          console.log(response)
        } catch(error) {
          console.log(error)
        }

        

    }
  



  return (
    <View className='w-screen h-full flex flex-col gap-10'>
      
                {file ? (
                  <View className="flex flex-col w-80 gap-10 h-rounded-md bg-gray-200 items-center justify-center">

                    
                      <Image source={{ uri: file.assets[0].uri }}
                          className="w-60 h-60 object-cover"/>

                      <Pressable className='bg-black' onPress={pickImage}>  
                        <Text className='text-2xl text-white p-2'>
                          Cargar Otra
                        </Text>   
                      </Pressable>

                    
                  </View>
                  
                ) 
                : (
                  <Pressable className='bg-black' onPress={pickImage}>  
                    <Text className='text-2xl text-white p-10'>
                      Carga la imagen
                    </Text>   
                  </Pressable>
                )}
        
                <Pressable className='bg-black' onPress={sendImage}>  
                    <Text className='text-xl text-white p-3'>
                      Enviar imagen
                    </Text>   
                </Pressable>
    </View>
  )
}

export default CamaraPrueba;