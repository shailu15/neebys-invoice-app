import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
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
      <View className="flex-1 bg-gray-900">
        <NavBar />
        <View className="flex-1 items-center justify-center">
          <Text className="mt-5 text-3xl font-bold text-white">neebys</Text>
        </View>
        <Animated.View className="absolute bottom-10 self-center" style={cameraStyle}>
          <Ionicons name="camera" size={64} color="#ffffff" />
        </Animated.View>
      </View>
    </>
  );
}
