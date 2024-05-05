import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import StartPage from './pages/StartPage/StartPage';
import Preferences from './pages/Preferences/Preferences';
import HomePage from './pages/HomePage/HomePage';
import NavBottom from './components/NavBottom/NavBottom';
import Onboarding from './pages/Onboarding/Onboarding';
import Register from './pages/Register/Register';
import AllGoals from './pages/AllGoals/AllGoals';

const Stack = createNativeStackNavigator();

export default function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [metas, setMetas] = useState([]);
  useEffect(() => {
    const isAuthenticated = checkAuthentication();
    setUserAuthenticated(isAuthenticated);
  }, []);

  const checkAuthentication = () => {
    // Simule a autenticação de usuário, substitua pela sua lógica real
    return false; // ou false, dependendo se o usuário está autenticado
  };
  const adicionarMeta = (valorAtual, valorMeta, tituloMeta, imageMeta, dataMeta) => {
    const novaMeta = {
      id: metas.length + 1,
      valorAtual: valorAtual,
      valorMeta: valorMeta,
      titulo: tituloMeta,
      imageMeta: imageMeta,
      dataMeta: dataMeta
    };
    setMetas([...metas, novaMeta]);
  }
  return (
    <NavigationContainer>
      {userAuthenticated ? (
        <Stack.Navigator>
          <Stack.Screen name="HomePage" options={{ headerShown: false }}>
            {(props) => (
              <View style={{ flex: 1 }}>
                <HomePage {...props} adicionarMetaApp={adicionarMeta} />
                <NavBottom />
              </View>
            )}
          </Stack.Screen>
          <Stack.Screen name="Preferences" options={{ headerShown: false }}>
            {(props) => (
              <View style={{ flex: 1 }}>
                <Preferences {...props} />
                <NavBottom />
              </View>
            )}
          </Stack.Screen>
          <Stack.Screen name="AllGoals" options={{ headerShown: false }} >
            {() => (<AllGoals metasData={metas} />)}
          </Stack.Screen>

        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="StartPage"
            options={{ headerShown: false }}
            component={StartPage}
          />
          <Stack.Screen
            name="Onboarding"
            options={{ headerShown: false }}
            component={Onboarding}
          />
          <Stack.Screen
            name="Register"
            options={{ headerShown: false }}
            component={Register}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
