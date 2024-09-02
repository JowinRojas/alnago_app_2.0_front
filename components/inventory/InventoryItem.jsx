import React, { useEffect, useState } from 'react'
import { Image, Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { closeStatus, openStatus } from "../../redux/slices/inputs/inventorySlice";
import Videos from "./Videos";
import Photos from './Photos';

const InventoryItem = ({name, status, fotos, video}) => {
    
    const dispatch = useDispatch();
    
    const abrir = ()=>{
      dispatch(openStatus(name))
    }
    const cerrar = ()=>{
      dispatch(closeStatus(name))
    }



  return (
    <View className="w-11/12 flex flex-col h-auto border rounded-3xl p-2 mt-2 justify-center ">
        
        <View className="bg-alnago-1 flex justify-center w-full px-2 mb-2 rounded-3xl">
          <Text className="text-2xl font-bold text-black">{name}</Text>
        </View>

        {status ? 
                  <View className="h-28 flex flex-row items-center">

                    {fotos?.map( item=> <Image source={{ uri: item }} key={item} className="w-20 h-20 object-cover rounded-3xl"/>)}

                    <Photos name={name}/>
                  </View> 
                : 
                  <View className="h-5 flex flex-col items-center">
                      <Text className="2xl font-bold">Esta Close</Text>
                  </View> 

        }
                

    
        <View className="flex flex-row w-full justify-between">

            <Pressable onPress={abrir} className="bg-slate-900 rounded-lg p-2">
            <Text className="font-bold text-green-700">ABRIR</Text>
            </Pressable>

          <Pressable onPress={cerrar} className="bg-slate-900 rounded-lg p-2">
            <Text className="font-bold text-red-600">CERRAR</Text>
          </Pressable>

        </View>
        
    </View>
  )
}

export default InventoryItem;