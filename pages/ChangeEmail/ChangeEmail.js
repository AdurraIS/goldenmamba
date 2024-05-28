import React, { useState } from 'react';
import { Button, Dimensions } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
const screenWidth = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native';

export default function ChangeEmail() {

    const navigation = useNavigation();


    return (
        <View
            style={styles.container}
        >
            <View style={[styles.header]} backgroundColor={'red'}>


            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth,


    },
    header: {
        width: screenWidth,
        height: '25%',
        marginTop: 10,
        display: 'flex'
    },

})
