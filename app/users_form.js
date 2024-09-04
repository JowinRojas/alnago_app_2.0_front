import { Stack } from "expo-router";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";

export default function UsersForm() {
  const [date, setDate] = useState(new Date());
  const onchange = (e, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onchange,
      mode: currentMode,
      is24Hour: true,
    });
  };
  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View className="w-full min-h-full justify-center items-center">
      <Stack.Screen options={{ headerTitle: "Usuarios" }} />
      <View className="w-11/12 h-auto items-center">
        <Text className="text-4xl my-6">Formulario</Text>
        <TextInput
          className="w-full h-14 bg-slate-200 rounded-2xl pl-2 my-3 text-2xl"
          placeholder="Nombres"
        />
        <TextInput
          className="w-full h-14 bg-slate-200 rounded-2xl pl-2 my-3 text-2xl"
          placeholder="Apellidos"
        />
        <TextInput
          className="w-full h-14 bg-slate-200 rounded-2xl pl-2 my-3 text-2xl"
          placeholder="Documento"
          inputMode="numeric"
          autoComplete="cc-number"
        />
        <TextInput
          className="w-full h-14 bg-slate-200 rounded-2xl pl-2 my-3 text-2xl"
          placeholder="Correo"
          inputMode="email"
        />

        <Pressable
          className="w-full h-14 bg-slate-200 rounded-2xl pl-2 "
          onPress={showDatepicker}
        >
          <Text
            className="my-3 text-2xl text-gray-600"
            nativeID="fecha"
          >
            
            {date.toLocaleDateString}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
