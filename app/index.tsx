import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';

export default function RootHome() {
  const bounce = useSharedValue(0);

  useEffect(() => {
    bounce.value = withRepeat(
      withSequence(withTiming(-10, { duration: 400 }), withTiming(0, { duration: 400 })),
      -1,
      true
    );
  }, [bounce]);

  const cameraStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: bounce.value }],
  }));

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
        <NavBar />
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>neebys</Text>
        </View>
        <Animated.View style={[styles.cameraWrapper, cameraStyle]}>
          <Ionicons name="camera" size={64} color="#ffffff" />
        </Animated.View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  cameraWrapper: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
});
