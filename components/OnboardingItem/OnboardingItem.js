import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import cardbackground from '../../assets/Backgrounds/cardbackground.png'
const OnboardingItem = ({ item }) => {

    return (

        <View style={[styles.card,{ backgroundColor: '#840F74' }]}>
            <ImageBackground source={cardbackground} styles={styles.backgroundimage}>
                <View style={[styles.card,{justifyContent: 'space-between', paddingVertical: 25,paddingHorizontal: 20,}]}>
                    <View>
                        <Text style={{ fontSize: 12, color: '#fff', marginBottom: 35 }}>Payment Card</Text>
                        <Text style={{ fontSize: 16, color: '#fff' }}>{item.cardnumber}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginRight:20 }}>
                        <Text style={{ fontSize: 16, color: '#fff' }}>{item.balance} ETH</Text>
                        <Text style={{ fontSize: 14, color: '#fff' }}>{item.expirationDate}</Text>
                    </View>

                </View>
            </ImageBackground>
        </View>

    )
}

export default OnboardingItem

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
    }
})