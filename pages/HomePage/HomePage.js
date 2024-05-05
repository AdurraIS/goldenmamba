import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { ScrollView, View, Text, StyleSheet, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import NavBottom from "../../components/NavBottom/NavBottom";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import cards from './Cards';
import OnboardingItem from '../../components/OnboardingItem/OnboardingItem';
import ProgressCircle from '../../components/ProgressCircle/ProgressCircle';
import { useNavigation } from '@react-navigation/native';

function HomePage({ adicionarMetaApp }) {
    const navigation = useNavigation();

    const [balance, setBalance] = useState(8.5);
    const [metas, setMetas] = useState([]);

    const adicionarMeta = (valorAtual, valorMeta, tituloMeta, imageMeta, dataMeta) => {
        const novaMeta = {
            id: metas.length + 1,
            valorAtual: valorAtual,
            valorMeta: valorMeta,
            titulo: tituloMeta,
            imageMeta: imageMeta,
            dataMeta: dataMeta
        };
        setMetas([...metas, novaMeta]);
    };

    const handleAdicionarMeta = () => {
        adicionarMeta(1000, 1000, "Car", require('../../assets/MetaIcons/Car.png'), '27/08/2024');
        adicionarMetaApp(1000, 1000, "Car", require('../../assets/MetaIcons/Car.png'), '27/08/2024');
    };
    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scroll} >
                <Image
                    style={styles.topBackgroundImage}
                    source={require('../../assets/Backgrounds/background.png')} // Caminho relativo para a imagem
                />
                <View style={styles.containerCards}>
                    <View style={[styles.header]}>
                        <View>
                            <Text style={[styles.textH2, { fontSize: 14, fontWeight: 200, marginBottom: 10 }]}>Welcome Back</Text>
                            <Text style={styles.textH2}>Yasmine Coutinho</Text>
                        </View>
                        <Image
                            style={styles.icones1}
                            source={require('../../assets/icones/notificationicon.png')} // Caminho relativo para a imagem
                        />
                    </View>

                    <View style={styles.pagamentos}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 10, marginBottom: 10 }}>
                            <Text style={{ fontSize: 14, color: '#840F74' }}>My Balance</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#840F74' }}>{balance} ETH</Text>
                        </View>
                        <View style={{ width: '90%', backgroundColor: '#F2F2F2', height: 2 }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 20 }}>
                            <View style={[styles.divBotoes]}>
                                <Image
                                    style={styles.icones}
                                    source={require('../../assets/icones/Home/EnviarIcon.png')} // Caminho relativo para a imagem
                                />
                                <Text style={styles.textH3}>Send</Text>
                            </View>
                            <View style={[styles.divBotoes]}>
                                <Image
                                    style={styles.icones}
                                    source={require('../../assets/icones/Home/RequestIcon.png')} // Caminho relativo para a imagem
                                />
                                <Text style={styles.textH3}>Request</Text>
                            </View>
                            <View style={[styles.divBotoes]}>
                                <Image
                                    style={styles.icones}
                                    source={require('../../assets/icones/Home/PayIcon.png')} // Caminho relativo para a imagem
                                />
                                <Text style={styles.textH3}>Pay</Text>
                            </View>
                            <View style={[styles.divBotoes]}>
                                <Image
                                    style={styles.icones}
                                    source={require('../../assets/icones/Home/TopUpIcon.png')} // Caminho relativo para a imagem
                                />
                                <Text style={styles.textH3}>Top Up</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: screenWidth, paddingHorizontal: 30, paddingVertical: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#840F74' }}>Your Cards</Text>
                        <Text style={{ fontSize: 14, color: '#840F74' }}>View All</Text>
                    </View>

                    <View style={styles.cartoes}>
                        <FlatList
                            data={cards}
                            renderItem={({ item }) => <OnboardingItem item={item} />}
                            horizontal
                            snapToAlignment='start'
                            scrollEventThrottle={16}
                            decelerationRate="fast"
                            snapToOffsets={cards.map((_, i) => i * (304 - 15) + (i - 1) * 40)} 
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: screenWidth, paddingHorizontal: 30, paddingVertical: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#840F74' }}>Your Goals</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('AllGoals')}>
                            <Text style={{ fontSize: 14, color: '#840F74' }}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.marginBottom, styles.pagamentosDiv]}>
                        {metas.map((meta) => {
                            return (
                                <TouchableOpacity key={meta.id} onPress={() => navigation.navigate('meta/' + meta.id)}>
                                    <View style={styles.cardGoals}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                            <Image style={{ width: 48, height: 48, borderRadius: 30 }} source={meta.imageMeta} />
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#840F74' }}>{meta.titulo}</Text>
                                        </View>
                                        <ProgressCircle size={48} progress={meta.valorAtual / meta.valorMeta} />
                                    </View>
                                </TouchableOpacity>

                            );
                        })}
                        <Button title="Adicionar Meta" onPress={handleAdicionarMeta} />
                    </View>
                </View>

            </ScrollView>
            <NavBottom style={styles.bottom} />
        </View >

    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingTop: 60,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        width: screenWidth,
        alignItems: 'center',
        marginBottom: 35
    },
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
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    topBackgroundImage: {
        position: 'absolute',
        height: screenHeight + 58,
        width: screenWidth,
        resizeMode: 'contain',
        top: 0,
        left: 0
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
        fontSize: 18,
        fontWeight: '500',
        color: '#fff'
    },
    textH3: {
        fontSize: 15,
        fontWeight: '400',
    },
    icones1: {
        width: 24,
        height: 24,
    },
    icones: {
        width: 46,
        height: 46,
    },
    cartoes: {
        height: 200,
        overflow: 'visible',
        width: screenWidth
    },
    pagamentos: {
        borderWidth: 1,
        borderColor: 'rgba(242, 242, 242, 0.5)',
        flexDirection: 'col',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        width: '80%',
        borderRadius: 10,
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
    },
    pagamentosDiv: {
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-around',
        width: '80%',
        position: 'relative',
    },
    cardGoals: {
        borderWidth: 1,
        borderColor: 'rgba(242, 242, 242, 0.3)',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        marginTop: 20
    },
    marginBottom: {
        marginBottom: 50
    }
});

export default HomePage;
