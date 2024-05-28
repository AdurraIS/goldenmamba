import React, { useState } from 'react';
import { Button, Dimensions } from 'react-native';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
const screenWidth = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native';


import settingsIcon from "../../assets/icones/settingsIcon.png"
import back from "../../assets/MetaIcons/back.png"
import { flare } from 'viem/chains';

export default function ChangePassword() {
    const navigation = useNavigation();

    const [oldEmail, setOldEmail] = useState("")
    const [NewEmail, setNewEmail] = useState("")
    const [Password, setPassword] = useState("")
    return (
        <View
            style={styles.container}
        >


            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={{ tintColor: '#000' }} source={back} />
                </TouchableOpacity>
                <Text>Change Password</Text>
                <Image source={settingsIcon} />
            </View>
            <View
                style={styles.inputArea}
            >
                <Text
                    style={styles.TextInput}
                >
                    Current Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                // value={text}
                // onChangeText={setText}
                />
            </View>
            <View
                style={styles.inputArea}
            >
                <Text
                    style={styles.TextInput}
                >
                    New Password
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                // value={text}
                // onChangeText={setText}
                />
            </View>
            <View
                style={styles.inputArea}
            >
                <Text
                    style={styles.TextInput}
                >
                    Confirm new Password
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                // value={text}
                // onChangeText={setText}
                />
            </View>


        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth * 0.95,
        marginHorizontal: 'auto',

    },
    header: {
        width: screenWidth,
        height: '15%',
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    inputArea: {
        width: '100%',
        // backgroundColor: 'red',
        padding: 10,

        gap: 20,
    },
    input: {
        borderRadius: 10,
        borderColor: '#cfcfd3',
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 20,
        borderWidth: 2
    },
    TextInput: {
        fontSize: 20,
    },

})
