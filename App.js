import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Meta from './components/Meta/Meta'
import HomePage from './pages/Preferences/Preferences';
import { useState } from 'react';

export default function App() {


  const [metas, setMetas] = useState([]);

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
  };

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          options={{ headerShown: false }}
        >
          {props => <HomePage {...props} adicionarMeta={adicionarMeta} />}
        </Stack.Screen>
        {metas.map(meta => (
          <Stack.Screen
          name={"meta/" + meta.id}
          options={{ headerShown: false }}
        >
          {() => (
            <Meta
            key={meta.id}
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
