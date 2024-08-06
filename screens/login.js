import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';

export default function Login({navigation}) {
  return (
    <View className="flex-1 bg-red-500">
      <StatusBar />
      <Text>Login</Text>
      <ActivityIndicator size='large'/>
      <Button title='Home' onPress={() => navigation.navigate("home")} />
    </View>
  );
}
