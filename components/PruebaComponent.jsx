
import { Pressable, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { mandarSomething } from "../redux/slices/imagenes/imagenesFetch";
import React, { useState, useEffect } from 'react';
import { View, Button, Image } from 'react-native';
import { useCameraPermissions } from 'expo-camera';

import { Camera } from 'expo-camera/legacy'

export default function PruebaComponent() {

  const algo = useSelector( state => state.imagenes.imagen);
  const dispatch = useDispatch();

  const mandar = ()=>{
    dispatch(mandarSomething())
  }

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef) {
      const photoData = await cameraRef.takePictureAsync();
      setPhoto(photoData);
    }
  };

  const sendPhoto = async () => {
    if (photo) {
      const formData = new FormData();
      formData.append('photo', {
        uri: photo.uri,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });

      try {
        const response = await fetch('http://<your-api-url>/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        });

        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error uploading photo:', error);
      }
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View className="flex-col gap-10 justify-between items-center bg-alnago-2 rounded-md px-4">
      <CameraView />
      <Button title="Take Photo" onPress={takePhoto} />
      {photo && <Image source={{ uri: photo.uri }} style={{ width: 100, height: 100 }} />}
      {photo && <Button title="Send Photo" onPress={sendPhoto} />}

      <Pressable onPress={mandar} className="flex-col gap-10 justify-between items-center bg-alnago-2 rounded-md px-4">
              <Text className="text-alnago-1 text-2xl p-1">Mandar Algo</Text>
      </Pressable>

      <Text>{algo}</Text>
    </View>
  );
}
