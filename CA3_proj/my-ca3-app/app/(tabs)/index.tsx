import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';




export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Image
        source={require('../../assets/images/Suitguy.jpg')} // Adjust if your image path is different
        style={styles.image}
      />
      <Text style={styles.name}>Hi, I'm Chimadi Ogakwu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
  },
});