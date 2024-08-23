import React, { useRef } from "react";
import { Link, Stack } from "expo-router";
import { DrawerLayoutAndroid, Pressable, View } from "react-native";
import { LogoTecho, OpenMenuIcon } from "../components/inventory/Icons";
import Rutas from "../components/Menu";
import { Provider } from 'react-redux';
import {store} from '../redux/store';


export default function Layout() {
  const drawer = useRef(null);
  const navigationView = () => <Rutas />;

  return (
    <Provider store={store}>
    <View className="flex-1">
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="right"
        renderNavigationView={navigationView}
      >
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "rgb(241, 209, 43)" },
            headerTitleAlign: "center",
            headerTitle: "Alnago 2.0",
            headerTintColor: "rgb(33, 25, 21)",
            headerTitleStyle: {
              fontSize: 23,
            },
            headerLeft: () => (
              <Link href="/home" className="w-12 h-9">
                <LogoTecho />
              </Link>
            ),
            headerRight: () => (
              <Pressable onPress={() => drawer.current.openDrawer()}>
                <OpenMenuIcon />
              </Pressable>
            ),
          }}
        />
      </DrawerLayoutAndroid>
    </View>
    </Provider>
  );
}
