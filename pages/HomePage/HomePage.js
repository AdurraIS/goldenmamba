import React from 'react';
import { Dimensions } from 'react-native';
import { ScrollView, View, Text, StyleSheet, Image, FlatList } from 'react-native';
import NavBottom from "../../components/NavBottom/NavBottom";
const screenWidth = Dimensions.get('window').width;
import cards from './Cards';
import OnboardingItem from '../../components/OnboardingItem/OnboardingItem';

function HomePage() {
    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scroll} >
                <View style={styles.containerCards}>
                    <View style={[styles.flexRow, styles.header]}>
                        <Image
                            style={styles.icones1}
                            source={require('../../assets/icones/configurações.png')} /
                        >
                        <Text style={styles.textH2}>Bem-vinda, Malu</Text>
                        <Image
                            style={styles.icones1}
                            source={require('../../assets/icones/icones.png')} // Caminho relativo para a imagem
                        />
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
                    <View style={styles.cartoes}>
                        <FlatList
                            data={cards}
                            renderItem={({ item }) => <OnboardingItem item={item} />}
                            horizontal
                            snapToAlignment='start'
                            scrollEventThrottle={16}
                            decelerationRate="fast"
                            snapToOffsets={cards.map((_, i) => i * (304-15) + (i - 1) * 40)} // Correção aqui
                            showsHorizontalScrollIndicator={false}
                        />
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
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
    },
    containerCards: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginBottom: 20,

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
        height: 200,
        overflow: 'visible',
        width: screenWidth
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
