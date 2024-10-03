import React, { Children, useRef } from "react";
import { Link, Stack } from "expo-router";
import { DrawerLayoutAndroid, Pressable, Text, View } from "react-native";
import Rutas from "../components/Menu";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { LogoTecho, OpenMenuIcon } from "../components/Icons";
import Menu from "../components/Menu";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function Layout() {
  const drawer = useRef(null);

  const navigationView = () => (
    <View>
      <Menu closeDrawer={() => drawer.current.closeDrawer()} />
    </View>
  );

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
                // <Link href="/home" className="w-12 h-9">
                <Link href="/inventory">
                  <LogoTecho />
                </Link>
              ),
              headerRight: () => (
                <StyledPressable
                  className={"active:opacity-50 active:scale-95"}
                  onPress={() => drawer.current.openDrawer()}
                >
                  <OpenMenuIcon drawer={drawer} />
                </StyledPressable>
              ),
            }}
          />
        </DrawerLayoutAndroid>
      </View>
    </Provider>
  );
}
