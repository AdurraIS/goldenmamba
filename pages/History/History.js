import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import NavBottom from "../../components/NavBottom/NavBottom"
const screenWidth = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native';

function History() {

    const navigation = useNavigation();

    const [Unread, setUnread] = useState('#cccccc');
    const [All, setAll] = useState('#840f74');
    const [exibindoAtualmente, setExibindo] = useState('all');

    const unreadSelected = () => {
        setUnread('#840f74')
        setAll('#cccccc')
        setExibindo('unread')
    };

    const AllSelected = () => {
        setAll('#840f74')
        setUnread('#cccccc')
        setExibindo('all')

    };

    const [isHovered, setIsHovered] = useState(false);


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };



    const [UnreadItems, setUnreadItems] = useState([

        {
            Icon: '../../assets/icones/receber.png',
            quantidade: 0.065,
            cripto: 'DOGE',
            enviado: false,
            recebido: true,
        },
        {
            Icon: '../../assets/icones/enviar.png',
            quantidade: 0.0001,
            cripto: 'ETH',
            enviado: true,
            recebido: false,
        },
        {
            Icon: '../../assets/icones/receber.png',
            quantidade: 0.0001,
            cripto: 'ETH',
            enviado: false,
            recebido: true,
        },
        {
            Icon: '../../assets/icones/receber.png',
            quantidade: 0.065,
            cripto: 'DOGE',
            enviado: false,
            recebido: true,
        },
        {
            Icon: '../../assets/icones/enviar.png',
            quantidade: 0.0001,
            cripto: 'ETH',
            enviado: true,
            recebido: false,
        },
        {
            Icon: '../../assets/icones/receber.png',
            quantidade: 0.0001,
            cripto: 'ETH',
            enviado: false,
            recebido: true,
        },
        {
            Icon: '../../assets/icones/receber.png',
            quantidade: 0.065,
            cripto: 'DOGE',
            enviado: false,
            recebido: true,
        },
        {
            Icon: '../../assets/icones/enviar.png',
            quantidade: 0.0001,
            cripto: 'ETH',
            enviado: true,
            recebido: false,
        },
        {
            Icon: '../../assets/icones/receber.png',
            quantidade: 0.0001,
            cripto: 'ETH',
            enviado: false,
            recebido: true,
        },
    ]);
    const [AllItems, setAllItems] = useState([
        {
            Icon: '../assets/icones/enviar.png',
            quantidade: 0.0001,
            cripto: 'ETH',
            enviado: true,
            recebido: false,
        },
        {
            Icon: '../../assets/icones/receber.png',
            quantidade: 0.0023,
            cripto: 'BTC',
            enviado: false,
            recebido: true,
        },
        {
            Icon: '../../assets/icones/enviar.png',
            quantidade: 322,
            cripto: 'DOGE',
            enviado: true,
            recebido: false,
        },
        {
            Icon: '../../assets/icones/receber.png',
            quantidade: 0.0001,
            cripto: 'ETH',
            enviado: false,
            recebido: true,
        },
        {
            Icon: '../assets/icones/enviar.png',
            quantidade: 0.0001,
            cripto: 'ETH',
            enviado: true,
            recebido: false,
        },
        {
            Icon: '../../assets/icones/receber.png',
            quantidade: 0.0023,
            cripto: 'BTC',
            enviado: false,
            recebido: true,
        },
        {
            Icon: '../../assets/icones/enviar.png',
            quantidade: 322,
            cripto: 'DOGE',
            enviado: true,
            recebido: false,
        },
        {
            Icon: '../../assets/icones/receber.png',
            quantidade: 0.0001,
            cripto: 'ETH',
            enviado: false,
            recebido: true,
        },
    ]);


    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.flexRow,
                    {
                        width: '100%',
                        marginTop: 50
                    }
                ]}
            >
                <TouchableOpacity
                    style={[styles.image, isHovered && styles.buttonHovered]}
                    onPress={() => navigation.navigate('HomePage')}
                    onPressIn={handleMouseEnter}
                    onPressOut={handleMouseLeave}>
                    <Image
                        style={[{
                            width: 15,
                            height: 28,
                        }]}
                        source={require('../../assets/icones/setaEsquerda.png')}
                    />
                </TouchableOpacity>
                <Text
                    style={[

                        styles.textH2,

                    ]}
                >
                    History
                </Text>
                <Image
                    style={{
                        width: 5,
                        height: 25,
                    }
                    }
                    source={require('../../assets/icones/pontos.png')}
                />
            </View>
            <View
                style={[
                    styles.flexRow, {
                        width: '100%',
                        marginTop: 50
                    }
                ]}
            >
                <View style={[styles.flexColumn, { width: '50%' }]}>
                    <Text onPress={AllSelected} style={[styles.textH2]}>all Notification</Text>
                    <View
                        style={{ width: '100%', height: 10, backgroundColor: All, borderRadius: 10 }}
                    ></View>
                </View>
                <View style={[styles.flexColumn, { width: '50%' }]}>
                    <Text onPress={unreadSelected} style={[styles.textH2]}>Unread</Text>
                    <View
                        style={{ width: '100%', height: 10, backgroundColor: Unread, borderRadius: 10 }}
                    ></View>
                </View>
            </View>

            <ScrollView contentContainerStyle={[styles.container, styles.scroll]}>
                {exibindoAtualmente === 'all' ? (
                    AllItems.map((element, index) => (
                        <View key={index}>
                            {element.recebido ? (
                                <View style={[styles.card, styles.flexRow, { marginBottom: 20 }]}>
                                    <Image
                                        style={[styles.icones2]}
                                        source={require('../../assets/icones/receber.png')}
                                    />
                                    <Text>You have received + {element.quantidade} - {element.cripto}</Text>
                                </View>
                            ) : (
                                <View style={[styles.card, styles.flexRow, { marginBottom: 20 }]}>
                                    <Image
                                        style={[styles.icones2]}
                                        source={require('../../assets/icones/enviar.png')}
                                    />
                                    <Text>You have sent + {element.quantidade} - {element.cripto}</Text>
                                </View>
                            )}
                        </View>
                    ))
                ) : (
                    UnreadItems.map((element, index) => (
                        <View key={index}>
                            {element.recebido ? (
                                <View style={[styles.card, styles.flexRow, { marginBottom: 20 }]}>
                                    <Image
                                        style={[styles.icones2]}
                                        source={require('../../assets/icones/receber.png')}
                                    />
                                    <Text>You have received + {element.quantidade} - {element.cripto}</Text>
                                </View>
                            ) : (
                                <View style={[styles.card, styles.flexRow, { marginBottom: 20 }]}>
                                    <Image
                                        style={[styles.icones2]}
                                        source={require('../../assets/icones/enviar.png')}
                                    />
                                    <Text>You have sent + {element.quantidade} - {element.cripto}</Text>
                                </View>
                            )}
                        </View>
                    ))
                )}
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    scroll: {
        width: screenWidth,
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
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
    icones3: {
        width: 30,
        height: 30,
    },
    BottomInvisible: {
        width: 70,
        height: 70,
    },

})

export default History;