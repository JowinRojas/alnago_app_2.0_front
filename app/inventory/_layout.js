import React, { useRef } from "react";
import { Stack } from "expo-router";
import { DrawerLayoutAndroid, Pressable, View } from "react-native";
import { LogoTecho, OpenMenuIcon } from "../../components/Icons";
import Menu from "../../components/Menu";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function LayoutInventory() {
  const drawer = useRef(null);

  const navigationView = () => (
    <View>
      <Menu closeDrawer={() => drawer.current.closeDrawer()} />
    </View>
  );

  return (
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
            headerTitle: "INVENTARIOS",
            headerTintColor: "rgb(33, 25, 21)",
            headerTitleStyle: {
              fontSize: 23,
            },
            headerLeft: () => <LogoTecho />,
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
  );
}
