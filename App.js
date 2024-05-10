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
import AllCards from './pages/AllCards/AllCards';
import CreatePin from './pages/CreatePin/CreatePin';
import ConfirmPin from './pages/ConfirmPin/ConfirmPin';
import VerifyEmail from './pages/Verify/VerifyEmail';
import AccountCreated from './pages/AccountCreated/AccountCreated';
import History from './pages/History/History';
import SignIn from './pages/SignIn/SignIn';
import Meta from './components/Meta/Meta';

const Stack = createNativeStackNavigator();

export default function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [metas, setMetas] = useState([]);
  const [userData, setUserData] = useState();
  const [pinData, setPinData] = useState("");
  const [cartoes, setCartoes] = useState([]);

  function adicionarCartao(cartao) {
    setCartoes([...cartoes, cartao]);
  }
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
  const getUserData = (prop) => {
    const vUserData = {
      fullName: prop.fullName,
      email: prop.email,
      password: prop.password,
    }
    setUserData(vUserData);
  }
  const getPinData = (prop) => {
    setPinData(prop);
  }
  return (
    <NavigationContainer>
      {userAuthenticated ? (
        <Stack.Navigator>
          <Stack.Screen name="HomePage" options={{ headerShown: false }}>
            {(props) => (
              <View style={{ flex: 1 }}>
                <HomePage {...props} adicionarMetaApp={adicionarMeta} setUserData={setUserData} userData={userData} metasData={metas} cardsData={cartoes} setCardsData={setCartoes} />
                <NavBottom />
              </View>
            )}
          </Stack.Screen>
          <Stack.Screen name="AllCards" options={{ headerShown: false }}>
            {() => (<AllCards userData={userData} adicionarCartao={adicionarCartao} cartoes={cartoes} />)}
          </Stack.Screen>
          <Stack.Screen name="Preferences" options={{ headerShown: false }}>
            {(props) => (
              <View style={{ flex: 1 }}>
                <Preferences {...props} setUserAuthenticated={setUserAuthenticated} />
                <NavBottom />
              </View>
            )}
          </Stack.Screen>
          {metas && metas.map((meta) => {
            return (
              <Stack.Screen key={meta.titulo} name={"meta/"+meta.titulo} options={{ headerShown: false }}>
                {(props) => (
                  <View style={{ flex: 1 }}>
                    <Meta valorAtual={meta.valorAtual} valorMeta={meta.valorMeta} tituloMeta={meta.titulo} imageMeta={meta.imageUrl} dataMeta={meta.dataMeta}/>
                  </View>
                )}
              </Stack.Screen>
            )
          })}
          <Stack.Screen name="AllGoals" options={{ headerShown: false }} >
            {() => (<AllGoals metasData={metas} userData={userData} setMetasData={setMetas} adicionarMeta={adicionarMeta} />)}
          </Stack.Screen>
          <Stack.Screen name="History" options={{ headerShown: false }} >
            {() => (
              <>
                <History />
                <NavBottom />
              </>)}
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
          >
            {(props) => (<Register {...props} getUserData={getUserData} />)}
          </Stack.Screen>
          <Stack.Screen
            name="CreatePin"
            options={{ headerShown: false }}
          >
            {(props) => (<CreatePin getPinData={getPinData} />)}
          </Stack.Screen>
          <Stack.Screen
            name="ConfirmPin"
            options={{ headerShown: false }}
          >
            {(props) => (<ConfirmPin pinData={pinData} />)}
          </Stack.Screen>
          <Stack.Screen
            name="VerifyEmail"
            options={{ headerShown: false }}
          >
            {(props) => (<VerifyEmail userData={userData} />)}
          </Stack.Screen>
          <Stack.Screen
            name="AccountCreated"
            options={{ headerShown: false }}
          >
            {() => (<AccountCreated userData={userData} dataPin={pinData} setUserAuthenticated={setUserAuthenticated} />)}
          </Stack.Screen>
          <Stack.Screen
            name="SignIn"
            options={{ headerShown: false }}
          >
            {() => (<SignIn setUserAuthenticated={setUserAuthenticated} setUserData={setUserData} />)}
          </Stack.Screen>
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
