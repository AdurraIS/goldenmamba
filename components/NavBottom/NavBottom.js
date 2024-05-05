import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

function NavBottom() {
    const navigation = useNavigation();
    const route = useRoute();
    const { name: currentScreen } = route;
    const [section, setSection] = useState(0);

    useEffect(() => {
        if(currentScreen === 'Home'){
            setSection(0);
        } else if(currentScreen === 'History'){
            setSection(1);
        } else if(currentScreen === 'Statistic'){
            setSection(2);
        } else if(currentScreen === 'Preferences'){
            setSection(3);
        }
    }, [currentScreen]);


    return (
        <View style={styles.bottom}>
            <TouchableOpacity
                style={[styles.navButton]}
                onPress={() => navigation.navigate('HomePage')}
            >
                {section === 0 ? (
                    <>
                        <Image
                            style={styles.iconImage}
                            source={require('../../assets/icones/homePressed.png')}
                        />
                        <Text style={styles.navText}>Home</Text>
                    </>
                ) : (
                    <>
                        <Image
                            style={styles.iconImage}
                            source={require('../../assets/icones/NavBar/home.png')}
                        />
                        <Text style={[styles.navText, { color: '#999999' }]}>Home</Text>
                    </>

                )}
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.navButton]}
                onPress={() => navigation.navigate('History')}
            >
                {section === 1 ? (
                    <>
                        <Image
                            style={[styles.iconImage, { tintColor: '#840F74' }]}
                            source={require('../../assets/icones/NavBar/cartao.png')}
                        />
                        <Text style={styles.navText}>History</Text>
                    </>
                ) : (
                    <>
                        <Image
                            style={[styles.iconImage]}
                            source={require('../../assets/icones/NavBar/cartao.png')}
                        />
                        <Text style={[styles.navText, { color: '#999999' }]}>History</Text>
                    </>
                )}
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.navButton, section == 2 && styles.buttonHovered]}
                onPress={() => console.log("Soon")}
            >
                {section === 2 ? (
                    <>
                        <Image
                            style={[styles.iconImage, { tintColor: '#840F74' }]}
                            source={require('../../assets/icones/lupa.png')}
                        />
                        <Text style={styles.navText}>Statistic</Text>
                    </>
                ) : (
                    <>
                        <Image
                            style={styles.iconImage}
                            source={require('../../assets/icones/lupa.png')}
                        />
                        <Text style={[styles.navText, { color: '#999999' }]}>Statistic</Text>
                    </>
                )}

            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.navButton, section == 3 && styles.buttonHovered]}
                onPress={() =>  navigation.navigate('Preferences')}
            >
                {section === 3? (
                    <>
                        <Image
                            style={[styles.iconImage, { tintColor: '#840F74' }]}
                            source={require('../../assets/icones/perfil.png')}
                        />
                        <Text style={styles.navText}>Profile</Text>
                    </>
                ) : (
                    <>
                        <Image
                            style={styles.iconImage}
                            source={require('../../assets/icones/perfil.png')}
                        />
                        <Text style={[styles.navText, { color: '#999999' }]}>Profile</Text>
                    </>
                )}

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navText: {
        fontSize: 10,
        color: '#840F74'
    },
    navButton: {
        flexDirection: 'column',
        gap: 4,
        alignItems: 'center'
    },
    iconImage: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    bottom: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderColor: 'rgba(242, 242, 242, 0.5)',
        borderTopWidth: 2,
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: 0,
        height: 76,


        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 10,


    }
})

export default NavBottom;