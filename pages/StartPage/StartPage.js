// Importações necessárias do React Native
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importações das imagens
import BackgroundStart from '../../assets/SignInBackground.png';
import LogoEscuro from '../../assets/LogoEscuro.png';

// Componente para a página inicial
export default function StartPage() {
    // Hook de navegação do React Navigation
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Imagem de fundo */}
            <ImageBackground source={BackgroundStart} style={styles.imageBackground}>
                <View style={styles.insideContainer}>
                    {/* Logo */}
                    <Image source={LogoEscuro} style={styles.image} />

                    {/* Botões e textos */}
                    <View>
                        {/* Botão para criar uma conta */}
                        <TouchableOpacity onPress={() => navigation.navigate('Onboarding')} style={styles.button}>
                            <Text style={styles.textWhite}>Create an account</Text>
                        </TouchableOpacity>

                        {/* Botão para acessar a tela de login */}
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={[styles.button, styles.whiteButton]}>
                            <Text style={styles.textPurple}>I have an account</Text>
                        </TouchableOpacity>

                        {/* Textos adicionais */}
                        <Text style={styles.textWhite}>Don’t have an account? Sign up</Text>
                        <Text style={styles.textPurple}>Forgot your password?</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

// Estilos para o componente StartPage
const styles = StyleSheet.create({
    // Estilos para os botões
    button: {
        width: 254,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BB35A9',
        borderRadius: 30,
        marginBottom: 20
    },
    whiteButton: {
        backgroundColor: '#fff',
    },
    // Estilos para o texto roxo
    textPurple: {
        color: '#BB35A9',
        textAlign: 'center',
    },
    // Estilos para o texto branco
    textWhite: {
        color: '#fff',
        textAlign: 'center',
    },
    // Estilos para o container principal
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Estilos para o container interno
    insideContainer: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 86,
        paddingBottom: 50
    },
    // Estilos para a imagem de fundo
    imageBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Estilos para a imagem do logo
    image: {
        resizeMode: 'contain',
    }
});
