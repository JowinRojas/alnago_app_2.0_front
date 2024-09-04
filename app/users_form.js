import { Stack } from "expo-router";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function UsersForm() {
  const [date, setDate] = useState(new Date());
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="w-full h-screen">
      <Stack.Screen options={{ headerTitle: "Usuarios" }} />
      <View className="w-full min-h-full justify-center items-center py-10">
        <Text className="text-4xl mb-4">Formulario</Text>
        <TextInput
          className="w-11/12 h-14 bg-slate-200 rounded-2xl pl-2 my-3 text-2xl"
          placeholder="Nombres"
        />
        <TextInput
          className="w-11/12 h-14 bg-slate-200 rounded-2xl pl-2 my-3 text-2xl"
          placeholder="Apellidos"
        />
        <TextInput
          className="w-11/12 h-14 bg-slate-200 rounded-2xl pl-2 my-3 text-2xl"
          placeholder="Tipo Documento"
        />
        <TextInput
          className="w-11/12 h-14 bg-slate-200 rounded-2xl pl-2 my-3 text-2xl"
          placeholder="Documento"
          inputMode="numeric"
          autoComplete="cc-number"
        />
        <TextInput
          className="w-11/12 h-14 bg-slate-200 rounded-2xl pl-2 my-3 text-2xl"
          placeholder="Correo"
          inputMode="email"
        />
        <TextInput
          className="w-11/12 h-14 bg-slate-200 rounded-2xl pl-2 my-3 text-2xl"
          placeholder="Estado"
        />
        <TextInput
          className="w-11/12 h-14 bg-slate-200 rounded-2xl pl-2 my-3 text-2xl"
          placeholder="Rol"
        />
        <TextInput
          className="w-11/12 h-14 bg-slate-200 rounded-2xl pl-2 my-3 text-2xl"
          placeholder="Sede"
        />

        <TextInput
          className="w-11/12 h-14 bg-slate-200 rounded-2xl pl-2 my-3 text-2xl"
          placeholder={date.toLocaleString()}
          editable={false}
        />

        <Pressable className="bg-alnago-2 w-9/12 h-14 rounded-2xl justify-center items-center mt-4 border-2 border-alnago-1">
          <Text className="text-3xl text-alnago-1">Guardar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
