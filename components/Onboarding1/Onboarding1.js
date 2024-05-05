import { Dimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
export default function Onboarding1({item, scrollToNext}) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={item.background} style={styles.imageBackground}>
                <View style={styles.insideContainer}>
                    <Text style={{ color: '#000', fontSize: 20, fontWeight: 600 }}>{item.title}</Text>
                    <Text style={{ textAlign: 'center', width: 261, color: '#999999', fontSize: 14, marginBottom: 8 }}>{item.text}</Text>
                    <View style={{ gap: 24, flexDirection: 'row', marginBottom: 48 }}>
                        {item.step == 1 ? <View style={{ width: 8, height: 8, backgroundColor: '#100D40', borderRadius: 30 }}></View> : <View style={{ width: 8, height: 8, backgroundColor: '#cccccc', borderRadius: 30 }}></View>}
                        {item.step == 2 ? <View style={{ width: 8, height: 8, backgroundColor: '#100D40', borderRadius: 30 }}></View> : <View style={{ width: 8, height: 8, backgroundColor: '#cccccc', borderRadius: 30 }}></View>}
                        
                    </View>
                    {item.step === 1 ? (<TouchableOpacity onPress={() => scrollToNext()} style={styles.button}>
                        <Text style={{ color: '#fff' }}>Next Step</Text>
                    </TouchableOpacity>): <TouchableOpacity  onPress={() => navigation.navigate('Register')} style={styles.button}>
                        <Text style={{ color: '#fff' }}>Next Step</Text>
                    </TouchableOpacity> }
                    
                    <Text  onPress={() => scrollToNext()} style={{fontSize:16, color:'#BB35A9', textDecorationLine: 'underline'}}>Skip this Step</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#BB35A9',
        width: 327,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    insideContainer: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        gap: 16,
        paddingTop: 462,
        paddingBottom: 50
    },
    container: {
        flex: 1,
        height: '100%',
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
})