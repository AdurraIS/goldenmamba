// Importações necessárias do React e do React Native
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// Obtém as dimensões da tela do dispositivo
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

// Componente de preferências do usuário
function Preferences({ setUserAuthenticated }) {
    // Estado para controlar o estado de 'hover' do componente
    const [isHovered, setIsHovered] = useState(false);

    // Função para lidar com o evento de 'mouse enter'
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // Função para lidar com o evento de 'mouse leave'
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // Função para realizar logout do usuário
    const handleLogout = () => {
        setUserAuthenticated(false);
    };

    // Renderização do componente
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll} >
                {/* Imagem de fundo */}
                <Image
                    style={styles.backgroundImage}
                    source={require('../../assets/Backgrounds/background.png')}
                />
                <View style={styles.containerPage}>
                    {/* Título */}
                    <Text style={{ marginBottom: 40, marginTop: 54, fontSize: 16, fontWeight: 'bold', color: '#fff' }}>Your Profile</Text>

                    {/* Cartão de perfil do usuário */}
                    <View style={styles.card}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* Foto de perfil */}
                            <Image
                                style={{ width: 48, height: 48 }}
                                source={require('../../assets/fotoDePerfil.png')}
                            />
                            {/* Botão para editar foto de perfil */}
                            <Image
                                style={{ width: 16, height: 16, position: 'absolute', bottom: 1, left: 35 }}
                                source={require('../../assets/icones/Preferences/editPhoto.png')}
                            />
                            <View>
                                {/* Nome do usuário */}
                                <Text style={[styles.textH2, { color: '#000' }]}>Gabriel Moreira</Text>
                                {/* Número de identificação */}
                                <Text style={styles.textH3}>1234 1234 1234</Text>
                            </View>
                        </View>
                    </View>

                    {/* Cartões de opções */}
                    <View style={styles.qrContainer}>
                        {/* Cartão para escanear QR */}
                        <View style={styles.card2}>
                            <Image
                                style={styles.icones2}
                                source={require('../../assets/icones/Qr.png')}
                            />
                            <Text style={styles.textH2}>Scan Qr</Text>
                        </View>
                        {/* Cartão para exibir o próprio QR */}
                        <View style={styles.card2}>
                            <Image
                                style={styles.icones2}
                                source={require('../../assets/icones/MeuQr.png')}
                            />
                            <Text style={styles.textH2}>My Qr</Text>
                        </View>
                    </View>

                    {/* Container de opções */}
                    <View style={styles.optionsContainer}>
                        {/* Título da seção */}
                        <Text style={styles.sectionTitle}>Account</Text>
                        {/* Opções de conta */}
                        <View style={styles.optionCard}>
                            <Image
                                style={styles.icones}
                                source={require('../../assets/icones/people.png')}
                            />
                            <Text style={styles.textH1}>Account</Text>
                        </View>
                        <View style={styles.optionCard}>
                            <Image
                                style={styles.icones}
                                source={require('../../assets/icones/email.png')}
                            />
                            <Text style={styles.textH1}>Change Email Address</Text>
                        </View>
                        <View style={styles.optionCard}>
                            <Image
                                style={styles.icones}
                                source={require('../../assets/icones/cadeadoSenha.png')}
                            />
                            <Text style={styles.textH1}>Change Password</Text>
                        </View>
                        {/* Título da seção */}
                        <Text style={styles.sectionTitle}>More Settings</Text>
                        {/* Mais opções */}
                        <View style={styles.optionCard}>
                            <Image
                                style={styles.icones}
                                source={require('../../assets/icones/cadeadoChave.png')}
                            />
                            <Text style={styles.textH1}>Account security</Text>
                        </View>
                        <View style={styles.optionCard}>
                            <Image
                                style={styles.icones}
                                source={require('../../assets/icones/interrogacao.png')}
                            />
                            <Text style={styles.textH1}>Help and privacy</Text>
                        </View>
                        {/* Botão de logout */}
                        <TouchableOpacity onPress={handleLogout} style={{ marginTop: 14 }}>
                            <Text style={{ fontSize: 16, color: '#FF552F', textDecorationLine: 'underline' }}>Log out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

// Estilos para o componente Preferences
const styles = StyleSheet.create({
    // Container de opções
    optionsContainer: {
        width: '100%',
        alignItems: 'center',
        gap: 16,
        height: 700
    },
    // Container para os cartões QR
    qrContainer: {
        flexDirection: 'row',
        gap: 16
    },
    // Estilo para o título de seção
    sectionTitle: {
        marginTop: 24,
        fontSize: 16,
        width: '80%',
        fontWeight: '600',
        color: '#333333'
    },
    // Estilo para os cartões de opção
    optionCard: {
        height: 72,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 16,
        width: '80%',
        borderRadius: 20,
        shadowColor: '#cccccc',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 20,
        elevation: 10,
    },
    // Estilo para a imagem de fundo
    backgroundImage: {
        position: 'absolute',
        height: screenHeight / 0.97,
        width: screenWidth,
        resizeMode: 'contain',
        top: 0,
        left: 0
    },
    // Estilo para a rolagem
    scroll: {
        width: screenWidth,
    },
    // Estilo para o container principal
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    // Estilo para o texto H3
    textH3: {
        fontSize: 12,
        fontWeight: '400',
        color: '#999999',
        marginLeft: 16
    },
    // Estilo para o texto H2
    textH2: {
        marginBottom: 8,
        fontSize: 14,
        fontWeight: '400',
        color: '#840F74',
        marginLeft: 16
    },
    // Estilo para o texto H1
    textH1: {
        marginLeft: 24,
        fontSize: 14,
        fontWeight: '400',
    },
    // Estilo para o texto branco
    white: {
        color: 'white'
    },
    // Estilo para os cartões
    card2: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 15,
        width: '40%',
        marginBottom: 24,
        shadowColor: '#cccccc',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 10,
        elevation: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 15,
        width: '80%',
        marginBottom: 24,
        shadowColor: '#cccccc',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 10,
        elevation: 10,
    },
    // Estilo para os ícones
    icones: {
        width: 40,
        height: 40,
    },
    // Estilo para os ícones 2
    icones2: {
        width: 50,
        height: 50,
    },
    // Estilo para o botão invisível
    BottomInvisible: {
        width: 70,
        height: 70,
    },
    // Estilo para o container da página
    containerPage: {
        alignItems: 'center',
        marginTop: 20
    }
});

// Exporta o componente Preferences
export default Preferences;
