import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function RootHome() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">Welcome to Neebys Invoice App</ThemedText>
        <Link href="/(tabs)" style={styles.link}>
          <ThemedText type="link">Enter App</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
