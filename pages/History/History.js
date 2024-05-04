import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import NavBottom from "../../components/NavBottom/NavBottom"

const screenWidth = Dimensions.get('window').width;

function History() {


    const [isHovered, setIsHovered] = useState(false);


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={[styles.container, styles.scroll]} >
                <View>
                    <Image></Image>
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

export default History;