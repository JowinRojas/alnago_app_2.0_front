import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Main } from "./components/Main";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <StatusBar style="auto"></StatusBar>
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
