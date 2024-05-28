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
import LinkWallets from './pages/LinkWallets/LinkWallets';
import ChangeEmail from './pages/ChangeEmail/ChangeEmail';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import { WagmiConfig } from 'wagmi'
import { mainnet, polygon, arbitrum } from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi-react-native';
const Stack = createNativeStackNavigator();
const projectId = '9f511ee16d6963183c82616eb62fc665';

// 2. Create config
const metadata = {
  name: 'Web3Modal RN',
  description: 'Web3Modal RN Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}
const chains = [mainnet, polygon, arbitrum]

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
  enableAnalytics: true
})


export default function App() {

  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [metas, setMetas] = useState([]);
  const [userData, setUserData] = useState();
  const [account, setAccount] = useState();
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
      <WagmiConfig config={wagmiConfig}>
        {userAuthenticated ? (
          <Stack.Navigator>
            <Stack.Screen name="ChangeEmail" options={{ headerShown: false }}>
              {(props) => (
                <View style={{ flex: 1 }}>
                  <ChangeEmail {...props} adicionarMetaApp={adicionarMeta}
                    setUserData={setUserData} userData={userData} metasData={metas}
                    cardsData={cartoes} setCardsData={setCartoes} />
                  <NavBottom />
                </View>
              )}
            </Stack.Screen>
            <Stack.Screen name="ChangePassword" options={{ headerShown: false }}>
              {(props) => (
                <View style={{ flex: 1 }}>
                  <ChangePassword {...props} adicionarMetaApp={adicionarMeta}
                    setUserData={setUserData} userData={userData} metasData={metas}
                    cardsData={cartoes} setCardsData={setCartoes} />
                  <NavBottom />
                </View>
              )}
            </Stack.Screen>
            <Stack.Screen name="HomePage" options={{ headerShown: false }}>
              {(props) => (
                <View style={{ flex: 1 }}>
                  <HomePage {...props} adicionarMetaApp={adicionarMeta}
                    setUserData={setUserData} userData={userData} metasData={metas}
                    cardsData={cartoes} setCardsData={setCartoes} />
                  <NavBottom />
                </View>
              )}
            </Stack.Screen>
            <Stack.Screen name="LinkWallets" options={{ headerShown: false }}>
              {() => (<LinkWallets />)}
            </Stack.Screen>
            <Stack.Screen name="AllCards" options={{ headerShown: false }}>
              {() => (<AllCards userData={userData} adicionarCartao={adicionarCartao} cartoes={cartoes} />)}
            </Stack.Screen>
            <Stack.Screen name="Preferences" options={{ headerShown: false }}>
              {(props) => (
                <View style={{ flex: 1 }}>
                  <Preferences {...props} setUserAuthenticated={setUserAuthenticated} userData={userData} />
                  <NavBottom />
                </View>
              )}
            </Stack.Screen>
            {metas && metas.map((meta) => {
              return (
                <Stack.Screen key={meta.titulo} name={"meta/" + meta.titulo} options={{ headerShown: false }}>
                  {(props) => (
                    <View style={{ flex: 1 }}>
                      <Meta valorAtual={meta.valorAtual} valorMeta={meta.valorMeta} tituloMeta={meta.titulo} imageMeta={meta.imageUrl} dataMeta={meta.dataMeta} />
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
      </WagmiConfig>
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
