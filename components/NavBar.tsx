import { Image, View } from 'react-native';

export default function NavBar() {
  return (
    <View className="h-14 w-full bg-gray-800 flex-row items-center px-4">
      <Image
        source={require('@/assets/images/neebys.logo.jpg')}
        className="h-10 w-10"
        style={{ resizeMode: 'contain' }}
      />
    </View>
  );
}
