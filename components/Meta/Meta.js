import React from 'react';
import { View, StyleSheet } from 'react-native';
import MetaHeader from './MetaHeader/MetaHeader';
import MetaBody from './MetaBody/MetaBody';

const Meta = ({ valorAtual, valorMeta, tituloMeta, imageMeta, dataMeta }) => {
  return (
    <View style={styles.container}>
        <MetaHeader title={tituloMeta} image={imageMeta}/>
        <MetaBody valorAtual={valorAtual} valorMeta={valorMeta} dataMeta={dataMeta}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});

export default Meta;