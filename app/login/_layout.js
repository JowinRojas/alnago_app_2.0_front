import React from "react";
import { Link, Stack } from "expo-router";
import { DrawerLayoutAndroid, View } from "react-native";

export default function LayoutLogin() {
  const navigationView = () => (
    <View>
    </View>
  );
  return (
    <View className="flex-1">
      <DrawerLayoutAndroid
        drawerLockMode="locked-closed"
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={navigationView}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
      </DrawerLayoutAndroid>
    </View>
  );
}
