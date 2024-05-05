import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../../shared/CreateClient';

import cardsArq from './Cards.js'

import ProgressCircle from '../../components/ProgressCircle/ProgressCircle';
import back from "../../assets/MetaIcons/back.png"
import settingsIcon from "../../assets/icones/settingsIcon.png"
import cardsArq from './Cards.js';
import cardbackground from '../../assets/Backgrounds/cardbackground.png'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default async function AllGoals() {



    const [cards, setCards] = useState([...cardsArq]);
    const navigation = useNavigation();


    const adicionarCartao = () => {
        // Aqui você pode adicionar lógica para adicionar um novo cartão
        // por exemplo, abrir um modal para preencher os detalhes do cartão
    }

    return (
        <>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                        <Image style={{ tintColor: '#000' }} source={back} />
                    </TouchableOpacity>
                    <Text>Your Cards</Text>
                    <Image source={settingsIcon} />
                </View>

                <ScrollView contentContainerStyle={styles.scroll}>
                    {cardsArq && cardsArq.map((cards, index) => {
                        return (
                            <View key={index} style={[styles.card, { backgroundColor: '#840F74', marginBottom: 10 }]}>
                                <ImageBackground source={cardbackground} style={styles.backgroundimage}>
                                    <View style={[styles.card, { justifyContent: 'space-between', paddingVertical: 25, paddingHorizontal: 20, }]}>
                                        <View>
                                            <Text style={{ fontSize: 12, color: '#fff', marginBottom: 35 }}>Payment Card</Text>
                                            <Text style={{ fontSize: 16, color: '#fff' }}>{cards.cardnumber}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>
                                            <Text style={{ fontSize: 16, color: '#fff' }}>{cards.balance} ETH</Text>
                                            <Text style={{ fontSize: 14, color: '#fff' }}>{cards.expirationDate}</Text>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        );
                    })}
                </ScrollView>

            </View>
            <View style={{ width: '100%', alignItems: 'center', position: 'absolute', bottom: 0 }}>
                <TouchableOpacity style={styles.button} onPress={adicionarCartao} >
                    <Text style={styles.buttonText}>Add Card</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 10,
        width: 304,
        height: 200,
        borderRadius: 20,
    },
    backgroundimage: {
        width: 304,
        height: 200,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scroll: {
        width: screenWidth,
        height: 2 * screenHeight,
        display: 'flex',
        marginBottom: 2,
        flexDirection: 'column',
        alignItems: 'center'
    },

    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    button: {
        width: 327,
        height: 56,
        backgroundColor: '#BB35A9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 16
    },
    textHeader: {
        fontSize: 14,
        color: '#840F74',
        paddingBottom: 10
    },
    textHeaderGray: {
        fontSize: 14,
        color: '#CCCCCC',
        paddingBottom: 10
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
        marginTop: 4
    },
    header: {
        paddingTop: 70,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
