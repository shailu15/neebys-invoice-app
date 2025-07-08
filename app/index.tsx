import { Stack } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';

export default function RootHome() {
  const bounce = useSharedValue(0);
  const [imageUri, setImageUri] = useState<string | null>(null);

  useEffect(() => {
    bounce.value = withRepeat(
      withSequence(withTiming(-10, { duration: 400 }), withTiming(0, { duration: 400 })),
      -1,
      true
    );
  }, [bounce]);

  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const openImagePicker = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const cameraStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: bounce.value }],
  }));

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
          headerTitle: 'Scan receipts, create stores.',
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
          <View style={styles.iconRow}>
            <Pressable onPress={openCamera} style={styles.iconButton}>
              <Ionicons name="camera" size={64} color="#ffffff" />
            </Pressable>
            <Pressable onPress={openImagePicker} style={styles.iconButton}>
              <Ionicons name="image" size={64} color="#ffffff" />
            </Pressable>
          </View>
        </Animated.View>
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={styles.preview}
            contentFit="cover"
          />
        )}
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
  iconRow: {
    flexDirection: 'row',
    gap: 16,
  },
  iconButton: {
    paddingHorizontal: 8,
  },
  preview: {
    width: '80%',
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 8,
  },
});
