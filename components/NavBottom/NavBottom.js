import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function NavBottom() {

    const navigation = useNavigation();

    const [isHovered, setIsHovered] = useState(false);


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <View style={styles.bottom}>
            <TouchableOpacity
                style={[styles.image, isHovered && styles.buttonHovered]}
                onPress={() => navigation.navigate('HomePage')}
                onPressIn={handleMouseEnter}
                onPressOut={handleMouseLeave}
            >
                <Image
                    style={styles.image}
                    source={require('../../assets/icones/home.png')} // Caminho relativo para a imagem
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.image, isHovered && styles.buttonHovered]}
                onPress={() => navigation.navigate('History')}
                onPressIn={handleMouseEnter}
                onPressOut={handleMouseLeave}
            >
                <Image
                    style={styles.card}
                    source={require('../../assets/icones/cartao.png')} // Caminho relativo para a imagem
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.image, isHovered && styles.buttonHovered]}
                onPress={() => navigation.navigate('Preferences')}
                onPressIn={handleMouseEnter}
                onPressOut={handleMouseLeave}
            >
                <Image
                    style={styles.image}
                    source={require('../../assets/icones/lupa.png')} // Caminho relativo para a imagem
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.image, isHovered && styles.buttonHovered]}
                onPress={() => console.log('Botão pressionado')}
                onPressIn={handleMouseEnter}
                onPressOut={handleMouseLeave}
            >
                <Image
                    style={styles.image}
                    source={require('../../assets/icones/perfil.png')} // Caminho relativo para a imagem
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    image: {
        width: 30,
        height: 30,
    },

    bottom: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: 0,
        height: 76,
        

        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 10,


    }, buttonHovered: {
        backgroundColor: 'lightblue',
    },
})

export default NavBottom;