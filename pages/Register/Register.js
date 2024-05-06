// Importações necessárias do React Native
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Função para validar o formato do email usando expressão regular
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Função para validar a senha
const isValidPassword = (password) => {
    // Verificar se a senha tem pelo menos 6 caracteres, uma letra maiúscula e um caractere especial
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
};

// Componente para a tela de registro
export default function Register({ getUserData }) {
    // Hook de navegação do React Navigation
    const navigation = useNavigation();

    // Estados para armazenar os dados do formulário e a mensagem de erro
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    // Função para lidar com a submissão do formulário de registro
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

        // Construção do objeto userData com os dados do usuário
        const userData = {
            fullName: fullName,
            email: email,
            password: password,
        };

        // Chamada da função getUserData passando os dados do usuário
        getUserData(userData);

        // Redirecionamento para a tela de criação de PIN
        navigation.navigate('CreatePin');

        // Limpeza da mensagem de erro
        setErrorMessage('');
    };

    // Renderização do componente
    return (
        <View style={styles.container}>
            {/* Título */}
            <Text style={[styles.title, { fontWeight: 'bold' }]}>Welcome!</Text>

            {/* Campo de entrada para o nome completo */}
            <View style={{ width: '100%' }}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="your name"
                    value={fullName}
                    onChangeText={setFullName}
                />
            </View>

            {/* Campo de entrada para o endereço de email */}
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

            {/* Campo de entrada para a senha */}
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

            {/* Switch para aceitar os termos */}
            <View style={styles.checkboxContainer}>
                <Switch
                    value={acceptedTerms}
                    onValueChange={setAcceptedTerms}
                    style={styles.switch}
                    ios_backgroundColor="#3e3e3e"
                    thumbColor={acceptedTerms ? '#f4f3f4' : '#f4f3f4'}
                    trackColor={{ false: '#3e3e3e', true: '#BB35A9' }}
                />
                <Text style={styles.termstext}>I have agree to our <Text style={{ textDecorationLine: 'underline' }}>Terms and Condition</Text></Text>
            </View>

            {/* Exibição da mensagem de erro, se houver */}
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

            {/* Botão de registro */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Botão para registro com número de telefone */}
            <TouchableOpacity style={[styles.buttonOutline, { marginBottom: 16 }]} onPress={() => console.log("Soon")}>
                <Text style={[styles.buttonText, { color: '#BB35A9' }]}>With Phone Number</Text>
            </TouchableOpacity>

            {/* Texto para redirecionar para a tela de login */}
            <Text style={[styles.termstext, { color: '#BB35A9' }]}>Already have an account ?<Text style={{ textDecorationLine: 'underline', color: '#BB35A9', fontWeight: 'bold' }}>Sign In</Text></Text>
        </View>
    );
}

// Estilos para o componente Register
const styles = StyleSheet.create({
    // Estilos para o texto dos termos
    termstext: {
        fontSize: 12,
        color: '#020614',
    },
    // Estilos para o container do switch
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
    },
    // Estilos para o rótulo
    label: {
        fontSize: 12,
        color: '#7B7B7B',
        marginBottom: 12
    },
    // Estilos para o título
    title: {
        marginTop: 154,
        marginBottom: 40,
        color: '#333333',
        fontSize: 24
    },
    // Estilos para o switch
    switch: {
        marginRight: 8,
        transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }]
    },
    // Estilos para o container principal
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    // Estilos para o campo de entrada
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
    // Estilos para o botão de registro
    button: {
        width: 327,
        height: 56,
        backgroundColor: '#BB35A9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 16
    },
    // Estilos para o botão de registro com número de telefone
    buttonOutline: {
        width: 327,
        height: 56,
        borderWidth: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderColor: '#BB35A9',
    },
    // Estilos para o texto do botão
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    // Estilos para a mensagem de erro
    errorMessage: {
        color: 'red',
        marginBottom: 15
    },
});
