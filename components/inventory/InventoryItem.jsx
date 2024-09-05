import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import {
  closeStatus,
  openStatus,
} from "../../redux/slices/inputs/inventorySlice";
import Videos from "./Videos";
import Photos from "./Photos";
import { DownArrowIcon, UpArrowIcon } from "../Icons";

const InventoryItem = ({ name, status, fotos, video }) => {
  const dispatch = useDispatch();
  const abrir_cerrar = () => {
    status ? dispatch(closeStatus(name)) : dispatch(openStatus(name));
  };

  return (
    <View className="w-11/12 h-auto border rounded-3xl p-2 mt-2">
      <Pressable onPress={abrir_cerrar}>
        <View className="w-full flex-row bg-alnago-1 px-2 rounded-3xl">
          <View className="p-1">
            {status ? <UpArrowIcon /> : <DownArrowIcon />}
          </View>
          <Text className="w-full max-w-full text-2xl font-bold text-black">{name}</Text>
        </View>
      </Pressable>

      {status ? (
        <View className="max-w-full h-auto flex-wrap flex-row justify-center ">
          {fotos?.map((item) => (
            <Image
              source={{ uri: item }}
              key={item}
              className="w-20 h-20 object-cover rounded-3xl mx-1 my-3"
            />
          ))}

          <Photos name={name} />
          <TextInput
            className="w-full m-2 border-2 rounded-2xl px-2 text-2xl"
            placeholder="Detalles"
            editable
            multiline
            numberOfLines={4}
            maxLength={500}
          />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default InventoryItem;
