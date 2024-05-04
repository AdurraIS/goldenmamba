import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './pages/Loading/Loading';
import StartPage from './pages/StartPage/StartPage';
import carIcon from './assets/MetaIcons/Car.png'
import Meta from './components/Meta/Meta';
export default function App() {
  return (
    <View style={styles.container}>
      <Meta valorAtual={50} valorMeta={1000} tituloMeta={"Car"} imageMeta={carIcon} dataMeta={'27/08/2024'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
