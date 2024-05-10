import React from 'react';
import { Dimensions } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
function Preferences({setUserAuthenticated}) {

    const handleLogout = () =>{
        setUserAuthenticated(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll} >


                <Image
                    style={styles.backgroundImage}
                    source={require('../../assets/Backgrounds/background.png')}
                />
                <View style={[
                    styles.containerPage,
                ]}>
                    <Text style={{ marginBottom: 40, marginTop: 54, fontSize: 16, fontWeight: 'bold', color: '#fff' }}>Your Profile</Text>


                    <View style={[
                        styles.card,
                    ]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                style={[{ width: 48, height: 48 }]}
                                source={require('../../assets/fotoDePerfil.png')} // Caminho relativo para a imagem
                            />
                            <Image
                                style={[{ width: 16, height: 16, position: 'absolute', bottom: 1, left: 35 }]}
                                source={require('../../assets/icones/Preferences/editPhoto.png')} // Caminho relativo para a imagem
                            />
                            <View>
                                <Text style={[
                                    styles.textH2, { color: '#000' }
                                ]}>Gabriel Moreira</Text>
                                <Text style={[
                                    styles.textH3,
                                ]}>1234 1234 1234</Text>
                            </View>

                        </View>



                    </View>
                    <View style={[
                        styles.qrContainer,
                    ]}>

                        <View style={[
                            styles.qrCard
                        ]}>
                            <Image
                                style={[
                                    styles.icones2,

                                ]}
                                source={require('../../assets/icones/Qr.png')}
                            />
                            <Text style={[styles.textH2]}>Scan Qr</Text>
                        </View>
                        <View style={[ styles.qrCard]}>
                            <Image
                                style={[styles.icones2]}
                                source={require('../../assets/icones/MeuQr.png')}/>
                            <Text style={[styles.textH2]}>My Qr</Text>
                        </View>
                    </View>
                    <View style={[styles.optionsContainer]}>
                        <Text style={[styles.sectionTitle]}>Account</Text>
                        <View style={[styles.optionCard]}>
                            <Image
                                style={[styles.icones]}
                                source={require('../../assets/icones/people.png')}/>
                            <Text style={[styles.textH1]}>Account</Text>
                        </View>
                        <View style={[styles.optionCard]}>
                            <Image
                                style={[styles.icones]}
                                source={require('../../assets/icones/email.png')} />
                            <Text style={[styles.textH1]}>Change Email Address</Text>
                        </View>
                        <View style={[styles.optionCard]}>
                            <Image
                                style={[styles.icones]}
                                source={require('../../assets/icones/cadeadoSenha.png')} />
                            <Text style={[styles.textH1]}>Change Password</Text>
                        </View>
                        <Text style={[styles.sectionTitle]}>More Settings </Text>
                        <View style={[styles.optionCard]}>
                            <Image
                                style={[styles.icones]}
                                source={require('../../assets/icones/cadeadoChave.png')}/>
                            <Text style={[styles.textH1]}>Account security</Text>
                        </View>
                        <View style={[styles.optionCard]}>
                            <Image
                                style={[styles.icones]}
                                source={require('../../assets/icones/interrogacao.png')}/>
                            <Text style={[styles.textH1]}>Help and privacy</Text>
                        </View>
                        <TouchableOpacity onPress={handleLogout} style={{marginTop: 14}}>
                            <Text style={{fontSize:16, color:'#FF552F', textDecorationLine: 'underline'}}>Log out</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    optionsContainer: {
        width: '100%',
        alignItems: 'center',
        gap: 16,
        height: 700
    },
    qrContainer: {
        flexDirection: 'row',
        gap: 16
    },
    qrCard: {
        height: 72,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 16,
        width: 155,
        borderRadius: 20,
        shadowColor: '#cccccc',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 10,
        elevation: 10,
    },
    sectionTitle: {
        marginTop: 24,
        fontSize: 16,
        width: '80%',
        fontWeight: '600',
        color: '#333333'
    },
    optionCard: {
        height: 72,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 16,
        width: '80%',
        borderRadius: 20,
        shadowColor: '#cccccc',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 20,
        elevation: 10,
    },
    backgroundImage: {
        position: 'absolute',
        height: screenHeight + 59,
        width: screenWidth ,
        resizeMode: 'contain',
        top: 0,
        left: 0
    },  
    scroll: {
        width: screenWidth,
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    textH3: {
        fontSize: 12,
        fontWeight: '400',
        color: '#999999',
        marginLeft: 16
    },
    textH2: {
        marginBottom: 8,
        fontSize: 14,
        fontWeight: '400',
        color: '#840F74',
        marginLeft: 16
    },
    textH1: {
        marginLeft: 24,
        fontSize: 14,
        fontWeight: '400',
    },
    white: {
        color: 'white'
    },
    
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 15,
        width: '80%',
        marginBottom: 24,
        shadowColor: '#cccccc',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 10,
        elevation: 10,
    },
    card2: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 15
    },
    icones: {
        width: 40,
        height: 40,
    },
    icones2: {
        width: 50,
        height: 50,
    },
    BottomInvisible: {
        width: 70,
        height: 70,
    },
    containerPage: {
        alignItems: 'center',
        marginTop: 20
    }
})

export default Preferences;