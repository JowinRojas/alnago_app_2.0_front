import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from 'react-redux';
import store from './redux/store.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaProvider>
      <View>
        <StatusBar style="auto"></StatusBar>
        <Menu />
      </View>
    </SafeAreaProvider>
    </Provider>
  );
}
