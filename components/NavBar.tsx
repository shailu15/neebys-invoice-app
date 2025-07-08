import { Image, View, StyleSheet } from 'react-native';

export default function NavBar() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/neebys.logo.jpg')}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    backgroundColor: '#1f2937',
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
