
// funcoes react
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export default function ConfirmPin({ pinData }) {
    // pinn escrito na tela
    const [pin, setPin] = useState('');
    // pin quando selecionado
    const [isTextInputFocused, setIsTextInputFocused] = useState(false);
    // mensagem de erro
    const [errorMessage, setErrorMessage] = useState("");
    // funcao para navegar entre telas
    const navigation = useNavigation();
    // texto colocado no pin
    const inputRef = useRef(null);
    
    // abre e fecha teclado
    const handleOpenKeyboard = () => {
        setIsTextInputFocused(true);
        Keyboard.dismiss();
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    // se o fin for correto, a mensagem conta criada é exibida
    useEffect(() => {
        if (pin.length === 4) {
            if (pin == pinData) {
                navigation.navigate('AccountCreated');
            } else {
                setErrorMessage("PIN Incorreto")
                setPin('')
            }
            
            
        }
    }, [pin, navigation]);
    // efeito quando input for selecionado
    useFocusEffect(
        React.useCallback(() => {
            handleOpenKeyboard();
            return () => {
                setIsTextInputFocused(false);
            };
        }, [])
    );
    
    return (
        <TouchableWithoutFeedback onPress={handleOpenKeyboard}>
            <View style={styles.container}>
                <Text style={styles.title}>Confirm PIN</Text>
                <View style={styles.containerdots}>
                    {pin.length > 0 ? <View style={styles.completedot} /> : <View style={styles.nulldot} />}
                    {pin.length > 1 ? <View style={styles.completedot} /> : <View style={styles.nulldot} />}
                    {pin.length > 2 ? <View style={styles.completedot} /> : <View style={styles.nulldot} />}
                    {pin.length > 3 ? <View style={styles.completedot} /> : <View style={styles.nulldot} />}
                </View>
                <TextInput
                    keyboardType='numeric'
                    ref={inputRef}
                    maxLength={4}
                    style={styles.input}
                    value={pin}
                    onChangeText={setPin}
                />
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
        marginTop: 20
    },
    title: {
        fontSize: 24,
        color: '#333333',
        fontWeight: 'bold',
        marginBottom: 102
    },
    containerdots: {
        flexDirection: 'row',
        gap: 34,
    },
    completedot: {
        width: 13,
        height: 13,
        borderRadius: 30,
        backgroundColor: '#333333'
    },
    nulldot: {
        width: 13,
        height: 13,
        borderRadius: 30,
        backgroundColor: '#CFCFCF'
    },
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        transform: [{ scaleX: 0 }, { scaleY: 0 }]
    }
})