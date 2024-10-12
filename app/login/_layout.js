import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function LayoutLogin() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      ></Stack>
    </View>
  );
}
