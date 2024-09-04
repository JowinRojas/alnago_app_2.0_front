import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import {
  closeStatus,
  openStatus,
} from "../../redux/slices/inputs/inventorySlice";
import Videos from "./Videos";
import Photos from "./Photos";

const InventoryItem = ({ name, status, fotos, video }) => {
  const dispatch = useDispatch();
  const abrir_cerrar = () => {
    status ? ( dispatch(closeStatus(name)) ) : (dispatch(openStatus(name)));
  }

  return (
    <View className="w-11/12 h-auto border rounded-3xl p-2 mt-2">
      <Pressable onPress={abrir_cerrar}>
        <View className="w-full bg-alnago-1 px-2 rounded-3xl">
          <Text className="text-2xl font-bold text-black">{name}</Text>
        </View>
      </Pressable>

      {status ? (
        <View className="max-w-full h-auto flex-wrap flex-row justify-center">
          {fotos?.map((item) => (
            <Image
              source={{ uri: item }}
              key={item}
              className="w-20 h-20 object-cover rounded-3xl m-1"
            />
          ))}

          <Photos name={name} />
        </View>
      ) : (
        <></>
      )}

    </View>
  );
};

export default InventoryItem;
