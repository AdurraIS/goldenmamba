import React from 'react';
import { Dimensions } from 'react-native';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import NavBottom from "../../components/NavBottom/NavBottom";
const screenWidth = Dimensions.get('window').width;

function HomePage() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll} >
                <View style={styles.containerCards}>
                    <View style={[styles.flexRow, styles.header]}>
                        <Image
                            style={styles.icones1}
                            source={require('../../assets/icones/configurações.png')} // Caminho relativo para a imagem
                        />
                        <Text style={styles.textH2}>Bem-vinda, Malu</Text>
                        <Image
                            style={styles.icones1}
                            source={require('../../assets/icones/icones.png')} // Caminho relativo para a imagem
                        />
                    </View>
                    <View style={styles.cartoes}>
                        <View style={styles.cartaoEsquerdo}></View>
                        <View style={styles.cartaoCentral}></View>
                        <View style={styles.cartaoDireito}></View>
                    </View>
                    <View style={styles.pagamentos}>
                        <View style={[styles.divBotoes, styles.enviar]}>
                            <Image
                                style={styles.icones1}
                                source={require('../../assets/icones/enviar.png')} // Caminho relativo para a imagem
                            />
                            <Text style={styles.textH3}>Send Money</Text>
                        </View>
                        <View style={[styles.divBotoes, styles.receber]}>
                            <Image
                                style={styles.icones1}
                                source={require('../../assets/icones/receber.png')} // Caminho relativo para a imagem
                            />
                            <Text style={styles.textH3}>Receive Money</Text>
                        </View>
                        <View style={[styles.divBotoes, styles.pagar]}>
                            <Image
                                style={styles.icones1}
                                source={require('../../assets/icones/contas.png')} // Caminho relativo para a imagem
                            />
                            <Text style={styles.textH3}>Pay Bill</Text>
                        </View>
                    </View>
                    <View style={[styles.marginBottom, styles.pagamentosDiv]}>
                        <Text>My Goals</Text>
                        <View style={styles.cardGoals}></View>
                        <View style={styles.cardGoals}></View>
                        <View style={styles.cardGoals}></View>
                        <View style={styles.cardGoals}></View>
                        <View style={styles.cardGoals}></View>
                    </View>
                </View>

            </ScrollView>
            <NavBottom style={styles.bottom} />
        </View >

    );
}

const styles = StyleSheet.create({
    bottom: {
        position: 'fixed',
        bottom: 0
    },
    scroll: {
        width: screenWidth,
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2f2f3',
        width: '100%',
        height: '100%',
    },
    containerCards: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginBottom: 20,
        overflow: 'visible'

    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%',
        marginTop: 40,
    },
    textH2: {
        fontSize: 20,
        fontWeight: '600',
    },
    textH3: {
        fontSize: 15,
        fontWeight: '400',
    },
    icones1: {
        width: 65,
        height: 65,
    },

    cartoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 150,
        width: '100%',
        position: 'relative',
        marginTop: 50
    },
    cartaoCentral: {
        width: '70%',
        height: 180,
        backgroundColor: '#eac6e8',
        borderRadius: 30
    },
    cartaoEsquerdo: {
        width: '50%',
        height: 150,
        backgroundColor: '#6b0364',
        position: 'absolute',
        top: 0,
        right: -150,
        borderRadius: 30
    },
    cartaoDireito: {
        width: '50%',
        height: 150,
        backgroundColor: '#bb36a7',
        position: 'absolute',
        top: 0,
        left: -150,
        borderRadius: 30
    },
    pagamentos: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 150,
        width: '80%',
        position: 'relative',
    },
    FlexColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    divBotoes: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    pagamentosDiv: {
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-around',
        width: '80%',
        position: 'relative',
    },
    cardGoals: {
        width: '100%',
        height: 130,
        backgroundColor: '#840f74',
        borderRadius: 20,
        marginTop: 20
    },
    marginBottom: {
        marginBottom: 50
    }
});

export default HomePage;
