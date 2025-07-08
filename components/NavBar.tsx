import { Image, StyleSheet, View } from 'react-native';

export default function NavBar() {
  return (
    <View style={styles.navbar}>
      <Image source={require('@/assets/images/neebys.logo.jpg')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    width: '100%',
    backgroundColor: '#333333',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
});
