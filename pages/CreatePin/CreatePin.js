// funcoes reacte
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';

export default function CreatePin({ getPinData }) {
    // pin que esta sendo escrito
    const [pin, setPin] = useState('');
    // mostra se input esta focado
    const [isTextInputFocused, setIsTextInputFocused] = useState(false);

    // funcao para navegar entre janelas
    const navigation = useNavigation();
    const route = useRoute();
    const { name: currentScreen } = route;
    const inputRef = useRef(null);

    const handleOpenKeyboard = () => {
        setIsTextInputFocused(true);
        Keyboard.dismiss(); // Dismiss any open keyboards
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    useEffect(() => {
        if (pin.length === 4) {
            getPinData(pin);
            navigation.navigate('ConfirmPin');
        }
    }, [pin, navigation]); -
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
            {/* container */}
            <View style={styles.container}>
                {/* titulo */}
                <Text style={styles.title}>Create PIN</Text>
                {/* pin */}
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
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
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