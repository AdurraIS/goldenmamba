// Importações necessárias do React Native
import { StyleSheet, View, Image } from 'react-native';

// Importação da imagem do logo claro
import LogoClaro from '../../assets/LogoClaro.png';

// Componente Loading
export default function Loading() {
  return (
    <View style={styles.container}>
      {/* Exibição da imagem do logo claro */}
      <Image source={LogoClaro} style={styles.image} />
    </View>
  );
}

// Estilos para o componente Loading
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#230021',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain' // A imagem é redimensionada para caber dentro do espaço do componente
  }
});
