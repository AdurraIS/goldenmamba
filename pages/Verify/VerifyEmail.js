import React, { useState, useRef} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { supabase } from '../../shared/CreateClient';
export default function EmailVerification({ userData }) {
    const generateRandomNumber = () => {
        const min = 1000;
        const max = 9999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const [code, setCode] = useState('');
    const [isTextInputFocused, setIsTextInputFocused] = useState(false);
    const inputRef = useRef(null);

    const handleOpenKeyboard = () => {
        setIsTextInputFocused(true);
        Keyboard.dismiss(); // Dismiss any open keyboards
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    useFocusEffect(
        React.useCallback(() => {
            handleOpenKeyboard();
        }, [])
    );
    const handleBlur = () => {
        setIsTextInputFocused(false);
    };
    const handleFocus = () => {
        setIsTextInputFocused(true);
    };
    const handleChange = (value) => {
        setCode(value);
    };
    async function handleSubmit(){
        try{
            const { data2, error2 } = await supabase.auth.verifyOtp({ code: tokenHash, type: 'email'})
            if(error2) throw error2
        } catch(error){
            console.error(error)
        }
            console.log("DEU CERTO!")
        }
    return (

        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handleOpenKeyboard}>
                <View style={styles.containerText}>
                    <Text style={styles.title}>Verify Account</Text>
                    <Text style={styles.subtitle}>Enter 6 digit code we have sent
                        to <Text style={{ fontWeight: 'bold', color: '#333333', }}>{userData.email}</Text></Text>
                    <View style={styles.inputContainer}>
                        {[0, 1, 2, 3,4,5].map((index) => (
                            <View key={index} style={styles.characterContainer}>
                                <Text style={styles.character}>{code[index] || '-'}</Text>
                                <View style={styles.line} />
                            </View>
                        ))}
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Text style={styles.subtitle}>Haven’t received verification code?</Text>
            <Text style={{ textDecorationLine: 'underline', fontSize: 16, color: '#BB35A9' }}>Resend Code</Text>
            {isTextInputFocused ? null : <TouchableOpacity style={[styles.button, { marginBottom: 16 }]} onPress={handleSubmit}>
                <Text style={[styles.buttonText, { color: 'white' }]}>Verify Now</Text>
            </TouchableOpacity>}

            <TextInput
                ref={inputRef}
                style={styles.hiddenInput}
                keyboardType="numeric"
                maxLength={6}
                value={code}
                onChangeText={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
        </View>

    );
}

const styles = StyleSheet.create({
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
    containerText: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 300
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
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
    inputContainer: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    characterContainer: {
        marginHorizontal: 5,
        alignItems: 'center',
    },
    character: {
        fontSize: 22,
        fontWeight: '400',
        color: '#BB35A9'
    },
    line: {
        width: 40,
        height: 2,
        backgroundColor: '#BB35A9',
        marginTop: 5,
    },
    hiddenInput: {
        transform: [{ scaleX: 0 }, { scaleY: 0 }]
    },
});
