import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/slices/inputs/inventorySlice";

export const Comment = ({ name }) => {
  const [detalles, setDetalles] = useState();
  const [textoGuardado, setTextoGuardado] = useState(true);
  const dispatch = useDispatch();

  const comentar = () => {
    dispatch(addComment({ name, detalles }));
    setTextoGuardado(true)
  };

  const guardarTexto = () => {
    setTextoGuardado(false);
  }

  return (
    <View>
      <TextInput
        className={textoGuardado ? "w-full border-2 rounded-2xl px-2 text-2xl" : "w-full border-2 border-red-600 rounded-2xl px-2 text-2xl"}
        placeholder="Detalles"
        onChangeText={setDetalles}
        onChange={guardarTexto}
        editable
        multiline
        numberOfLines={4}
        maxLength={500}
        value={detalles}
      />
      <Pressable
        className="bg-black rounded-3xl h-10 mt-5 w-full flex justify-center items-center"
        onPress={comentar}
      >
        <Text className="text-white">Cargar Comentarios</Text>
      </Pressable>
    </View>
  );
};
