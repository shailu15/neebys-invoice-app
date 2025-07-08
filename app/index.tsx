import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';

export default function RootHome() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
          headerLeft: () => (
            <Image
              source={require('@/assets/images/neebys.logo.jpg')}
              style={{ width: 40, height: 40, marginLeft: 10 }}
              contentFit="contain"
            />
          ),
        }}
      />
      <View style={styles.container}>
        <Ionicons name="camera" size={64} color="black" />
        <Text style={styles.title}>neebys</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  title: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: 'bold',
  },
});
