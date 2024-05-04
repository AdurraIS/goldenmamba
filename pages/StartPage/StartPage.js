import { StyleSheet, View, Text, Image, ImageBackground, TouchableHighlight } from 'react-native';
import BackgroundStart from '../../assets/SignInBackground.png';
import LogoEscuro from '../../assets/LogoEscuro.png';

export default function Loading() {
    return (
        <View style={styles.container}>
            <ImageBackground source={BackgroundStart} style={styles.imageBackground}>
                <View style={styles.insideContainer}>
                    <Image source={LogoEscuro} style={styles.image} />
                    <View>
                        <TouchableHighlight style={styles.button}>
                            <Text style={styles.textWhite}>Create an account</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.button, styles.whiteButton]}>
                            <Text style={styles.textPurple}>I have an account</Text>
                        </TouchableHighlight>
                        <Text style={styles.textWhite}>Don’t have an account? Sign up</Text>
                        <Text style={styles.textPurple}>Forgot your password?</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
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
    textPurple: {
        color: '#BB35A9',
        textAlign: 'center',
    },
    textWhite:{
        color: '#fff',
        textAlign: 'center',
    },
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
    imageBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
    }
});
