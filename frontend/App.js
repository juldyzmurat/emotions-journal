import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const sendReq = () => {
    console.log(`Sending GET request to '${process.env.EXPO_PUBLIC_API_URL}/'...`);
    return fetch(`${process.env.EXPO_PUBLIC_API_URL}/`)
      .then(res => res.text())
      .then(jsonText => console.log(`RES: ${jsonText}`))
      .catch(err => console.error(err));
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={sendReq} style={styles.button}>
        <Text style={styles.buttonText}>Send Request</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#5db2ef',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    color: '#fafafa',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
