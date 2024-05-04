import { StyleSheet, View, Image } from 'react-native';
import LogoClaro from '../../assets/LogoClaro.png';
export default function Loading() {
  return (
    <View style={styles.container}>
        <Image source={LogoClaro} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#230021',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    resizeMode: 'contain'
  }
});
