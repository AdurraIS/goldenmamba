import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import accountCreatedImage from '../../assets/Backgrounds/AccountCreated.png';
const APIKEY = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicHJvamVjdElkIjoiOWI3MTVhZjgtYTUyYi00NDQ3LWFlMTYtOWFkMjVjNGE0YmM1Iiwic2NvcGVzIjpbIlJFQURfV0FMTEVUUyIsIlJFQURfQ09OVFJBQ1RTIiwiUkVBRF9UT0tFTl9UWVBFUyIsIlJFQURfVFJBTlNBQ1RJT05TIiwiREVQTE9ZX0NPTlRSQUNUUyIsIldSSVRFX0NPTlRSQUNUUyIsIldSSVRFX0NVU1RPTV9UUkFOU0FDVElPTlMiLCJXUklURV9NSU5UUyIsIldSSVRFX01JTlRTIiwiV1JJVEVfVE9LRU5fVFlQRVMiLCJXUklURV9UUkFOU0ZFUlMiLCJXUklURV9XQUxMRVRTIl0sImlhdCI6MTcxNDkwODIxNX0.miKl5yoCyI-MWzxSoj9dhAXF6SIUMnyvCm6ra7TUegN6GlPIxPxNG-M6tga26iRd6GRGhzpv6M9LfwmGQQXF7z1rt3qA-gP3yZ7AxMvIQRaytYKIzFyO9UiQGM1Qs0PMkoctToiw3wIiTgthXBGdBfNSY_Y0JkgqfiSk8KPreBBrt63cpQJOXamTUkYNYDcUu5TcPP0Cq_wrjzt5zHLqjxikPBvcQnoIRwrlOUFImMhojhfLyQ_7qOoB_zLnTu-OulSlGH5edkkVlr_AjB87x_dToRWpnkL--SCN_lVnWTLLQQq5up730UyF575ckuRXB-k6z7Sf-t8xym8rjXInHKVTQbx0kc6OO3LsL5jcwQsGrdzUxN5voVSbuONxVINAdn8i0YY6vOlIzA9Ms75tdp1arlOxymMYXSU8PTWxxymYvYkbyaoTS3wIhEQEFuF3j8FBgV43RPtWuTd6yZaesGbGOVdg1lw2IDfB74P4Dv-lsvZhfQ3EGHIldiBgbUeaTscPSIUdAr4NadZx3NIYyMmqFouUguPGD0nGicbkh7VeDHwx6YYkEA6nDoK2hOYNtbmOns7UuNa5jbi_btS93R7z8jw583XZKoLlae5tGAvkhtdeoBj3A1eRB2Il6K-t9Q3AgmmIEIphaj0TyTEziSkSxJIP7UsYenOQYDAtaWM";
import { supabase } from '../../shared/CreateClient';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function AccountCreated({ userData, dataPin, setUserAuthenticated}) {
    const navigation = useNavigation();
    function handleSubmit() {
        register()
    }
    const options = { method: 'POST', headers: { Authorization: 'Bearer ' + APIKEY } }
    async function register() {
        var response;
        try {
            response = await axios('https://protocol-sandbox.lumx.io/v2/wallets', options)
            console.log(response.data)
        } catch (error) {
            console.error(error.message);
        }

        try {
            // Insere os dados do usuário na tabela 'usuarios'
            const { data, error: insertError } = await supabase
                .from('usuarios')
                .insert({
                    idWallet: response.data.id,
                    address: response.data.address,
                    fullName: userData.fullName,
                    email: userData.email,
                    password: userData.password,
                    pin: dataPin,
                });
            if (insertError) {
                // Se ocorrer um erro durante a inserção de dados, lança uma exceção com a mensagem de erro
                throw new Error(insertError.message);
            }

        } catch (error) {
            // Se ocorrer um erro durante o processo, exibe uma mensagem de erro
            alert("Erro: " + error.message);
        }
        setUserAuthenticated(true);
        navigation.navigate('HomePage');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Account Created</Text>
            <Text style={styles.subtitle}>
                Your account has been created successfully. Press continue to continue using the app
            </Text>
            <Image source={accountCreatedImage} />
            <TouchableOpacity style={[styles.button, { marginBottom: 16 }]} onPress={handleSubmit}>
                <Text style={[styles.buttonText, { color: 'white' }]}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 16,
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