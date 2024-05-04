import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MetaHeader = ({ title, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 231,
    width: '100%',
    backgroundColor: '#840F74',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'flex-end',
    flexDirection: 'row',
    padding: 30,
  },
  insideContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff'
  },
  image: {
    width: 112,
    height: 100,
    borderRadius: 10,
    marginRight: 20
  },
});

export default MetaHeader;