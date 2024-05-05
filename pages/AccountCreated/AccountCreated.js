import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import accountCreatedImage from '../../assets/Backgrounds/AccountCreated.png';

import { useNavigation } from '@react-navigation/native';
export default function AccountCreated({register}) {
    const navigation = useNavigation();
    function handleSubmit(){
        register()
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Account Created</Text>
            <Text style={styles.subtitle}>
                Your account has been created successfully. Press continue to continue using the app
            </Text>
            <Image source={accountCreatedImage}/>
            <TouchableOpacity style={[styles.button, { marginBottom: 16 }]} onPress={handleSubmit}>
                <Text style={[styles.buttonText, { color: 'white' }]}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap:16,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    button: {
        position: 'absolute',
        bottom: 30,
        width: 327,
        height: 56,
        backgroundColor: '#BB35A9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,

    },
    subtitle: {
        color: '#999999',
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'center',
        width: 240,
    },
})