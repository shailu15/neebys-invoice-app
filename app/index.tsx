import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavBar from '@/components/NavBar';

export default function RootHome() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View style={styles.container}>
        <NavBar />
        <View style={styles.content}>
          <Text style={styles.title}>neebys</Text>
        </View>
        <Ionicons name="camera" size={64} color="#ffffff" style={styles.camera} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  camera: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
});
