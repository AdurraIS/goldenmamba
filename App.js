import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './pages/Loading/Loading';
import StartPage from './pages/StartPage/StartPage';

export default function App() {
  return (
    <View style={styles.container}>
      <StartPage/>
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
