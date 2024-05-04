import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import NavBottom from "../../components/NavBottom/NavBottom"

const screenWidth = Dimensions.get('window').width;

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
            <Image
                style={styles.backgroundImage}
                source={require('../../assets/background.png')} // Caminho relativo para a imagem
            />
            <ScrollView contentContainerStyle={[styles.container, styles.scroll]} >

                <View style={[
                    styles.marginTop2,


                ]}>
                    <Text style={[styles.textH1, styles.white]}>Your Profile</Text>
                </View>

                <View style={[
                    styles.card,
                    styles.flexRow,
                ]}>

                    <Image
                        style={[
                            styles.icones,
                            styles.marginhorizontal,
                        ]}
                        source={require('../../assets/fotoDePerfil.png')} // Caminho relativo para a imagem
                    />
                    <View style={[
                        styles.FlexColumnStart,
                    ]}>
                        <Text style={[
                            styles.textH2,
                        ]}>Gabriel Moreira</Text>
                        <Text style={[
                            styles.textH3,
                        ]}>1234 1234 1234</Text>
                    </View>
                </View>
                <View style={[
                    styles.flexRow,
                ]}>

                    <View style={[
                        styles.card2,
                        styles.flexRow,
                        styles.marginhorizontal,
                    ]}>
                        <Image
                            style={[
                                styles.icones2,
                                styles.marginhorizontal,

                            ]}
                            source={require('../../assets/icones/Qr.png')} // Caminho relativo para a imagem
                        />
                        <Text style={[styles.textH2]}>Scan Qr</Text>
                    </View>

                    <View style={[
                        styles.card2,
                        styles.flexRow,
                        styles.marginhorizontal,

                    ]}>
                        <Image
                            style={[
                                styles.icones2,
                                styles.marginhorizontal,
                            ]}
                            source={require('../../assets/icones/MeuQr.png')} // Caminho relativo para a imagem
                        />
                        <Text style={[styles.textH2]}>My Qr</Text>
                    </View>
                </View>
                <View style={[
                    styles.flexColumn
                ]}>
                    <Text style={[styles.textH1]}>Account</Text>

                    <View style={[
                        styles.card,
                        styles.flexRow,
                        styles.marginTop2,

                    ]}>
                        <Image
                            style={[
                                styles.icones,
                                styles.marginhorizontal,

                            ]}
                            source={require('../../assets/icones/people.png')} // Caminho relativo para a imagem
                        />
                        <Text style={[
                            styles.textH1,
                        ]}>Account                    </Text>
                    </View>
                    <View style={[
                        styles.card,
                        styles.flexRow,
                        styles.marginTop2,

                    ]}>
                        <Image
                            style={[
                                styles.icones,
                                styles.marginhorizontal,

                            ]}
                            source={require('../../assets/icones/email.png')} // Caminho relativo para a imagem
                        />
                        <Text style={[
                            styles.textH1,
                        ]}>Change Email Address</Text>
                    </View>
                    <View style={[
                        styles.flexRow,
                        styles.marginTop2,
                        styles.card,

                    ]}>
                        <Image
                            style={[
                                styles.icones,
                                styles.marginhorizontal,

                            ]}
                            source={require('../../assets/icones/cadeadoSenha.png')} // Caminho relativo para a imagem
                        />
                        <Text style={[
                            styles.marginhorizontal,
                            styles.textH1,
                        ]}>Change Password</Text>
                    </View>

                </View>
                <View style={[
                    styles.flexColumn
                ]}>
                    <Text style={[styles.textH1]}>More Settings </Text>

                    <View style={[
                        styles.card,
                        styles.flexRow,
                        styles.marginTop2,

                    ]}>
                        <Image
                            style={[
                                styles.icones,
                                styles.marginhorizontal,

                            ]}
                            source={require('../../assets/icones/cadeadoChave.png')} // Caminho relativo para a imagem
                        />
                        <Text style={[
                            styles.marginhorizontal,
                            styles.textH1,
                        ]}>Account security</Text>
                    </View>
                    <View style={[
                        styles.card,
                        styles.flexRow,
                        styles.marginTop2,

                    ]}>
                        <Image
                            style={[
                                styles.icones,
                                styles.marginhorizontal,

                            ]}
                            source={require('../../assets/icones/interrogacao.png')} // Caminho relativo para a imagem
                        />
                        <Text style={[
                            styles.marginhorizontal,
                            styles.textH1,
                        ]}>Help and privacy</Text>
                    </View>

                    <View style={[
                        styles.BottomInvisible,
                    ]}>

                    </View>


                </View>

            </ScrollView >
            <NavBottom />
        </View >
    );
}

const styles = StyleSheet.create({
    scroll: {
        width: screenWidth,
        height: '140%'
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    flexRowStart: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'space-around',
    },
    flexColumnStart: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-around',
    },
    marginTop2: {
        marginTop: 30
    },
    marginTop: {
        marginTop: 150
    },
    marginhorizontal: {
        marginHorizontal: 10
    },
    textH3: {
        fontSize: 18,
        fontWeight: '400',
    },
    textH2: {
        fontSize: 20,
        fontWeight: '600',
    },
    textH1: {
        fontSize: 25,
        fontWeight: '800',
    },
    white: {
        color: 'white'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 15,
        width: '80%',
    },
    card2: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 15
    },
    icones: {
        width: 70,
        height: 70,
    },
    icones2: {
        width: 50,
        height: 50,
    },
    BottomInvisible: {
        width: 70,
        height: 70,
    },

})

export default Preferences;