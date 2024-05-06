import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SignInImage from '../../assets/Backgrounds/SignIn.png';
import { supabase } from '../../shared/CreateClient';
import { useNavigation} from '@react-navigation/native';

const isValidEmail = (email) => {
    // Regex para validar o formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export default function SignIn({setUserAuthenticated,setUserData}) {
    const navigation = useNavigation();
    const [errorMessage, setErrorMessage] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    async function handleSubmit() {

        if (!isValidEmail(email)) {
            setErrorMessage('O email inserido não é válido.');
            return;
        }
        try {
            const { data, error } = await supabase
            .from('usuarios')
            .select('*') 
            .eq('email', email);
            const response = data[0]
            console.log(senha)
            if(response.password != senha){
                setErrorMessage("Email ou senha inválida!")
                return;
            }
            if(response == null){
                setErrorMessage("Email ou senha inválida!")
                return;
            }
        } catch (error) {
            console.error(error.message);
            return;
        }
        setUserData({email})
        setUserAuthenticated(true);
        navigation.navigate('HomePage')
        setErrorMessage('');
    }

    return (
        <>
            <Image style={styles.image} source={SignInImage} />
            <View style={styles.container}>
                <Text style={styles.title}>Welcome Back!</Text>
                <View style={{ width: '100%' }}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="email@domain.com"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={{ width: '100%' }}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="password"
                        secureTextEntry
                        value={senha}
                        onChangeText={setSenha}
                    />
                </View>
                <Text style={{ width: '100%', textAlign: 'right', fontSize: 12, color: '#C4C4C4' }}>Forgot Password ?</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={[styles.buttonText, { color: '#999999', fontSize: 12 }]}>Don’t have an account?<Text style={{ color: '#BB35A9' }}> Sign Up</Text></Text>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
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
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        color: '#333333',
        marginBottom: 37
    },
    errorMessage: {
        color: 'red',
        marginTop: 15,
    },
    label: {
        fontSize: 12,
        color: '#7B7B7B',
        marginBottom: 12
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
        marginBottom: 24,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    image: {
        marginBottom: 44,
        width: '100%'
    }
})