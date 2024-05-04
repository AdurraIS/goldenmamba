import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import NavBottom from "../../components/NavBottom/NavBottom"


function Preferences() {


    const [isHovered, setIsHovered] = useState(false);


    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <View style={styles.container}>
            <View style={[styles.flexRow, styles.Header]}>

                <View style={[styles.flexRow, styles.PerfilFoto]}>
                    <View style={[styles.flexRow, styles.divPerfilNome]}>
                        <View style={[styles.FotoDePerfil]}>
                        </View>
                        <View>
                            <View>
                                <Text style={[styles.textH1]}>Malu Souza </Text>
                            </View>
                            <View>
                                <Text style={[styles.textH2]}>Account detalis</Text>
                            </View>

                        </View>

                    </View>

                    <View>
                        <Image
                            style={styles.seta}
                            source={require('../../assets/icones/setaDireita.png')} // Caminho relativo para a imagem
                        />
                    </View>

                </View>
            </View>
            <View style={[styles.flexRow, styles.center]}>

                <View style={styles.perfil}>
                    <Text style={styles.textH1}>Profile</Text>

                    <View style={[styles.flexRow, styles.LinhaCenter]}>
                        <Image
                            style={styles.imageCenter}
                            source={require('../../assets/icones/people.png')} // Caminho relativo para a imagem
                        />
                        <Text style={[styles.textH1, styles.textH1Center]}>Profile</Text>

                    </View>
                    <View style={[styles.flexRow, styles.LinhaCenter]}>
                        <Image
                            style={styles.imageCenter}
                            source={require('../../assets/icones/icones.png')} // Caminho relativo para a imagem
                        />
                        <Text style={[styles.textH1, styles.textH1Center]}>Notifications</Text>

                    </View>
                    <View style={[styles.flexRow, styles.LinhaCenter]}>
                        <Image
                            style={styles.imageCenter}
                            source={require('../../assets/icones/people.png')} // Caminho relativo para a imagem
                        />
                        <Text style={[styles.textH1, styles.textH1Center]}>Profile</Text>

                    </View>

                    <Text style={styles.textH1}>Setting & Preferences</Text>
                    <View style={[styles.flexRow, styles.LinhaCenter]}>
                        <Image
                            style={styles.imageCenter}
                            source={require('../../assets/icones/segurança.png')} // Caminho relativo para a imagem
                        />
                        <Text style={[styles.textH1, styles.textH1Center]}>Preferences</Text>

                    </View>
                    <View style={[styles.flexRow, styles.LinhaCenter]}>
                        <Image
                            style={styles.imageCenter}
                            source={require('../../assets/icones/configurações.png')} // Caminho relativo para a imagem
                        />
                        <Text style={[styles.textH1, styles.textH1Center]}>Product Settings</Text>

                    </View>
                    <View style={[styles.flexRow, styles.LinhaCenter]}>
                        <Image
                            style={styles.imageCenter}
                            source={require('../../assets/icones/Qr.png')} // Caminho relativo para a imagem
                        />
                        <Text style={[styles.textH1, styles.textH1Center]}>QR & Passcodes</Text>

                    </View>
                </View>
            </View>
            <NavBottom />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    FlexColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textH2: {
        fontSize: 20,
        fontWeight: '600',
    },
    textH1: {
        fontSize: 25,
        fontWeight: '800',
    },
    Header: {
        marginTop: '10%',
        width: '100%',
        height: "20%"

    },
    PerfilFoto: {
        width: "100%",
    },

    FotoDePerfil: {
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: '#840f74',
        marginRight: 10

    },

    center: {
        height: '60%',
        width: '80%',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-around',
        paddingBottom: 50,
    },
    perfil: {
        justifyContent: 'space-between',
        height: '113%'
    },
    LinhaCenter: {
        width: '60%',
        // height: '15%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',

    },
    imageCenter: {
        height: 60,
        width: 60,
        marginRight: 20, // Espaçamento horizontal entre os itens
    },
    image: {
        width: 30,
        height: 30,
    },
    card: {
        width: 30,
        height: 25
    },
    seta: {
        width: 19,
        height: 35
    },
    bottom: {
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#ebc7e9',
        position: 'relative',
        height: 160, // altura em pontos (píxeis)
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 50

    }, buttonHovered: {
        backgroundColor: 'lightblue',
    },
})

export default Preferences;