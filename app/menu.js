import React, { useRef, useState } from "react";
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from "react-native";
import Rutas from "../components/Menu";

export default function Menu() {
  const drawer = useRef(null);

  const navigationView = () => ( <Rutas />);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="right"
      renderNavigationView={navigationView}
    >
      <View>
        
        <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};
