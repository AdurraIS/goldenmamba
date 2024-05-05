import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import back from "../../../assets/MetaIcons/back.png"
    
const MetaHeader = ({ title, image }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
         <TouchableOpacity style={{marginBottom:20, flexDirection:'row', alignItems:'center'}} onPress={() => navigation.goBack()}>
                <Image style={{tintColor:'#fff'}} source={back}/><Text style={{color:'#fff'}}>Back</Text>
            </TouchableOpacity>
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
    justifyContent: 'flex-end',
    flexDirection: 'col',
    paddingLeft:30,
    paddingBottom:30
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