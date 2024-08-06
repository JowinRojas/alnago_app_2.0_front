import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <StatusBar style="auto" />
      <Button title='Home' onPress={() => navigation.navigate("home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
