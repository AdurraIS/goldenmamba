import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useNavigation} from '@react-navigation/native';

const isValidEmail = (email) => {
    // Regex para validar o formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isValidPassword = (password) => {
    const navigation = useNavigation();

    // Verificar se a senha tem pelo menos 6 caracteres, uma letra maiúscula e um caractere especial
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
};

export default function Register({getUserData}) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleSubmit = () => {
        // Validação dos campos
        if (fullName.length < 15) {
            setErrorMessage('O nome completo deve ter pelo menos 15 caracteres.');
            return;
        }

        if (!isValidEmail(email)) {
            setErrorMessage('O email inserido não é válido.');
            return;
        }

        if (!isValidPassword(password)) {
            setErrorMessage('A senha deve ter pelo menos 6 caracteres, uma letra maiúscula e um caractere especial.');
            return;
        }
        if (!acceptedTerms) {
            setErrorMessage('Você deve aceitar os termos antes de enviar.');
            return;
        }

        const userData = {
            fullName: fullName,
            email: email,
            password: password,
        }
        getUserData(userData);
        navigation.navigate('CreatePin')
        setErrorMessage('');
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { fontWeight: 'bold' }]}>Welcome!</Text>
            <View style={{ width: '100%' }}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="your name"
                    value={fullName}
                    onChangeText={setFullName}
                />
            </View>
            <View style={{ width: '100%' }}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="email@domain.com"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
            </View>
            <View style={{ width: '100%' }}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            <View style={styles.checkboxContainer}>
                <Switch
                    value={acceptedTerms}
                    onValueChange={setAcceptedTerms}
                    style={styles.switch}
                    ios_backgroundColor="#3e3e3e" // Define a cor de fundo no iOS
                    thumbColor={acceptedTerms ? '#f4f3f4' : '#f4f3f4'}
                    trackColor={{ false: '#3e3e3e', true: '#BB35A9' }}
                />
                <Text style={styles.termstext}>I have agree to our <Text style={{textDecorationLine: 'underline'}}>Terms and Condition</Text></Text>
            </View>
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonOutline,{marginBottom:16}]} onPress={() => console.log("Soon")}>
                <Text style={[styles.buttonText, {color: '#BB35A9'}]}>With Phone Number</Text>
            </TouchableOpacity>
            <Text style={[styles.termstext,{color: '#BB35A9'}]}>Already have an account ?<Text style={{textDecorationLine: 'underline',color: '#BB35A9', fontWeight:'bold'}}>Sign In</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    termstext:{
        fontSize: 12,
        color: '#020614',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
    },
    label: {
        fontSize: 12,
        color: '#7B7B7B',
        marginBottom: 12
    },
    title: {
        marginTop: 154,
        marginBottom: 40,
        color: '#333333',
        fontSize: 24
    },
    switch: {
        marginRight: 8,
        transform: [{ scaleX: 0.9 }, { scaleY: 0.9}]
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    input: {
        width: '100%',
        height: 48,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        fontSize: 14,
        padding: 14,
        color: '#333333',
        marginBottom: 20,
    },
    button: {
        width: 327,
        height: 56,
        backgroundColor: '#BB35A9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom:16
    },
    buttonOutline: {
        width: 327,
        height: 56,
        borderWidth:1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderColor:'#BB35A9',
    },
    buttonText: {
        fontSize:16,
        color: 'white',
        fontWeight: 'bold',
    },
    errorMessage: {
        color: 'red',
        marginBottom:15
    },
});
