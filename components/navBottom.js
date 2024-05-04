import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function bottom() {

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
                onPress={() => console.log('Botão pressionado')}
                onPressIn={handleMouseEnter}
                onPressOut={handleMouseLeave}
            >
                <Image
                    style={styles.image}
                    source={require('../icones/home.png')} // Caminho relativo para a imagem
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.image, isHovered && styles.buttonHovered]}
                onPress={() => console.log('Botão pressionado')}
                onPressIn={handleMouseEnter}
                onPressOut={handleMouseLeave}
            >
                <Image
                    style={styles.card}
                    source={require('../icones/cartao.png')} // Caminho relativo para a imagem
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
                    source={require('../icones/lupa.png')} // Caminho relativo para a imagem
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
                    source={require('../icones/perfil.png')} // Caminho relativo para a imagem
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
    card: {
        width: 30,
        height: 25
    },
    bottom: {
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#ebc7e9',
        position: 'relative',
        height: 160, // altura em pontos (píxeis)
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 50

    }, buttonHovered: {
        backgroundColor: 'lightblue',
    },
})

export default bottom;