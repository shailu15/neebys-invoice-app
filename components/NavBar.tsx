import { Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NavBar() {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Image
        source={require('@/assets/images/neebys.logo.jpg')}
        style={styles.logo}
      />
      <Text style={styles.tagline}>Scan receipts, create stores.</Text>
    </SafeAreaView>
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
  tagline: {
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 12,
  },
});
