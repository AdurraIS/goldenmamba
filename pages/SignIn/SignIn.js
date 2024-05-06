// Importações necessárias do React Native
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

// Importação das imagens
import SignInImage from '../../assets/Backgrounds/SignIn.png';

// Importação do cliente Supabase
import { supabase } from '../../shared/CreateClient';

// Função para validar o formato do email usando expressão regular
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Componente para a tela de login
export default function SignIn({ setUserAuthenticated, setUserData }) {
    // Hook de navegação do React Navigation
    const navigation = useNavigation();

    // Estados para armazenar os dados do formulário e a mensagem de erro
    const [errorMessage, setErrorMessage] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    // Função para lidar com a submissão do formulário de login
    async function handleSubmit() {
        // Verificar se o email é válido
        if (!isValidEmail(email)) {
            setErrorMessage('O email inserido não é válido.');
            return;
        }

        try {
            // Consultar o banco de dados para encontrar o usuário com o email fornecido
            const { data, error } = await supabase
                .from('usuarios')
                .select('*')
                .eq('email', email);

            // Se houver um erro na consulta, exibir mensagem de erro
            if (error) {
                console.error(error.message);
                return;
            }

            // Se não houver dados retornados, exibir mensagem de erro
            if (!data || data.length === 0) {
                setErrorMessage('Usuário não encontrado.');
                return;
            }

            // Se a senha não corresponder à senha armazenada, exibir mensagem de erro
            const response = data[0];
            if (response.password !== senha) {
                setErrorMessage('Email ou senha inválida!');
                return;
            }
        } catch (error) {
            console.error(error.message);
            return;
        }

        // Definir os dados do usuário autenticado e redirecionar para a página inicial
        setUserData({ email });
        setUserAuthenticated(true);
        navigation.navigate('HomePage');
        setErrorMessage('');
    }

    // Renderização do componente
    return (
        <>
            {/* Imagem de fundo */}
            <Image style={styles.image} source={SignInImage} />
            <View style={styles.container}>
                {/* Título */}
                <Text style={styles.title}>Welcome Back!</Text>
                <View style={{ width: '100%' }}>
                    {/* Campo de entrada de email */}
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="email@domain.com"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={{ width: '100%' }}>
                    {/* Campo de entrada de senha */}
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="password"
                        secureTextEntry
                        value={senha}
                        onChangeText={setSenha}
                    />
                </View>
                {/* Link "Forgot Password?" */}
                <Text style={{ width: '100%', textAlign: 'right', fontSize: 12, color: '#C4C4C4' }}>Forgot Password ?</Text>
                {/* Mensagem de erro */}
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                {/* Botão de login */}
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                {/* Texto "Don’t have an account? Sign Up" */}
                <Text style={[styles.buttonText, { color: '#999999', fontSize: 12 }]}>Don’t have an account?<Text style={{ color: '#BB35A9' }}> Sign Up</Text></Text>
            </View>
        </>
    )
}

// Estilos para o componente SignIn
const styles = StyleSheet.create({
    // Estilos para o botão
    button: {
        width: 327,
        height: 56,
        backgroundColor: '#BB35A9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 16,
        marginTop: 20
    },
    // Estilos para o texto do botão
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    // Estilos para o título
    title: {
        fontSize: 24,
        color: '#333333',
        marginBottom: 37
    },
    // Estilos para a mensagem de erro
    errorMessage: {
        color: 'red',
        marginTop: 15,
    },
    // Estilos para o rótulo
    label: {
        fontSize: 12,
        color: '#7B7B7B',
        marginBottom: 12
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
        marginBottom: 24,
    },
    // Estilos para o container principal
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    // Estilos para a imagem
    image: {
        marginBottom: 44,
        width: '100%'
    }
});
