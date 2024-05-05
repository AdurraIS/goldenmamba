import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Meta from './components/Meta/Meta'
import HomePage from './pages/HomePage/HomePage';
import { useState } from 'react';
import Preferences from './pages/Preferences/Preferences';
import AllGoals from './pages/AllGoals/AllGoals';

export default function App() {


  const [metas, setMetas] = useState([]);

  const adicionarMetaApp = (valorAtual, valorMeta, tituloMeta, imageMeta, dataMeta) => {
    const novaMeta = {
      id: metas.length + 1,
      valorAtual: valorAtual,
      valorMeta: valorMeta,
      titulo: tituloMeta,
      imageMeta: imageMeta,
      dataMeta: dataMeta
    };
    setMetas([...metas, novaMeta]);
  };

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          options={{ headerShown: false }}
        >
          {(props) => <HomePage {...props} adicionarMetaApp={adicionarMetaApp} />}
        </Stack.Screen>
        <Stack.Screen
          name="AllGoals"
          options={{ headerShown: false }}
        >
          {() => <AllGoals metasData={metas} />}
        </Stack.Screen>
        <Stack.Screen
          name="Preferences"
          options={{ headerShown: false }}
          component={Preferences}
        />
        {metas.map(meta => (
          <Stack.Screen
          key={meta.id}
            name={"meta/" + meta.id}
            options={{ headerShown: false }}
          >
            {() => (
              <Meta
                valorAtual={meta.valorAtual}
                valorMeta={meta.valorMeta}
                tituloMeta={meta.titulo}
                imageMeta={meta.imageMeta}
                dataMeta={meta.dataMeta}
              />
            )}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
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
