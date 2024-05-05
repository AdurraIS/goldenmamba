import React, { useState } from 'react';
import { Button, Dimensions } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
const screenWidth = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native';
function History() {

    const navigation = useNavigation();
    const [exibindoAtualmente, setExibindo] = useState('All');

    const [items, setItems] = useState([
        {
          id: 1,
          Icon: '../../assets/icones/receber.png',
          quantidade: -0.065, // quantidade negativa se você foi o remetente
          cripto: 'DOGE',
          remetente: 'Giovanni', // você enviou DOGE para alguém
          destinatario: 'Alice', // nome aleatório
        },
        {
          id: 2,
          Icon: '../../assets/icones/receber.png', // você recebeu ETH de alguém
          quantidade: 0.0001,
          cripto: 'ETH',
          remetente: 'Alice', // nome aleatório
          destinatario: 'Giovanni', 
        },
        {
          id: 3,
          Icon: '../../assets/icones/enviar.png', // você enviou ETH para alguém
          quantidade: -0.0001, // quantidade negativa se você foi o remetente
          cripto: 'ETH',
          remetente: 'Giovanni', 
          destinatario: 'Bob', // nome aleatório
        },
        {
          id: 4,
          Icon: '../../assets/icones/enviar.png', // você recebeu DOGE de alguém
          quantidade: 0.065,
          cripto: 'DOGE',
          remetente: 'Bob', // nome aleatório
          destinatario: 'Giovanni', 
        },
        {
          id: 5,
          Icon: '../../assets/icones/receber.png', // você enviou BTC para alguém
          quantidade: -0.0023, // quantidade negativa se você foi o remetente
          cripto: 'BTC',
          remetente: 'Giovanni', 
          destinatario: 'Charlie', // nome aleatório
        },
        {
          id: 6,
          Icon: '../../assets/icones/receber.png', // você recebeu DOGE de alguém
          quantidade: 322,
          cripto: 'DOGE',
          remetente: 'Charlie', // nome aleatório
          destinatario: 'Giovanni', 
        },
        {
          id: 7,
          Icon: '../../assets/icones/enviar.png', // você enviou ETH para alguém
          quantidade: -0.0001, // quantidade negativa se você foi o remetente
          cripto: 'ETH',
          remetente: 'Giovanni', 
          destinatario: 'Dave', // nome aleatório
        },
        {
          id: 8,
          Icon: '../../assets/icones/receber.png', // você recebeu ETH de alguém
          quantidade: 0.0001,
          cripto: 'ETH',
          remetente: 'Dave', // nome aleatório
          destinatario: 'Giovanni', 
        },
        {
          id: 9,
          Icon: '../../assets/icones/receber.png', // você enviou BTC para alguém
          quantidade: -0.0023, // quantidade negativa se você foi o remetente
          cripto: 'BTC',
          remetente: 'Giovanni', 
          destinatario: 'Eve', // nome aleatório
        },
        {
          id: 10,
          Icon: '../../assets/icones/enviar.png', // você recebeu DOGE de alguém
          quantidade: 322,
          cripto: 'DOGE',
          remetente: 'Eve', // nome aleatório
          destinatario: 'Giovanni', 
        },
      ]);
      
    const allSelected = () => {
        setExibindo('All')
    };

    const sendSelected = () => {
        setExibindo('Send')
    };
    const requestSelected = () => {
        setExibindo('Request')
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>History</Text>
            </View>
            <View
                style={[{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: '100%',
                    marginTop: 10
                }
                ]}
            >
                <View style={[{ flexDirection: 'column', width: '33%' }]}>

                    {exibindoAtualmente == 'All' ? (
                        <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={allSelected}>
                            <Text style={[styles.textHeader]}>All</Text>
                            <View
                                style={{ width: '100%', height: 5, backgroundColor: '#840f74', borderRadius: 10 }}
                            ></View>
                        </TouchableOpacity>) : (
                        <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={allSelected}>
                            <Text style={[styles.textHeaderGray]}>All</Text>
                            <View
                                style={{ width: '100%', height: 3, backgroundColor: '#cccccc', borderRadius: 10 }}
                            ></View>
                        </TouchableOpacity>)
                    }

                </View>
                <View style={[{ flexDirection: 'column', alignItems: 'center', width: '33%' }]}>
                    {exibindoAtualmente == 'Send' ? (
                        <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={sendSelected}>
                            <Text style={[styles.textHeader]}>Send</Text>
                            <View
                                style={{ width: '100%', height: 5, backgroundColor: '#840f74', borderRadius: 10 }}
                            ></View>
                        </TouchableOpacity>) : (
                        <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={sendSelected}>
                            <Text style={[styles.textHeaderGray]}>Send</Text>
                            <View
                                style={{ width: '100%', height: 3, backgroundColor: '#cccccc', borderRadius: 10 }}
                            ></View>
                        </TouchableOpacity>)
                    }
                </View>
                <View style={[{ flexDirection: 'column', alignItems: 'center', width: '33%' }]}>
                    {exibindoAtualmente == 'Request' ? (
                        <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={requestSelected}>
                            <Text style={[styles.textHeader]}>Request</Text>
                            <View
                                style={{ width: '100%', height: 5, backgroundColor: '#840f74', borderRadius: 10 }}
                            ></View>
                        </TouchableOpacity>) : (
                        <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={requestSelected}>
                            <Text style={[styles.textHeaderGray]}>Request</Text>
                            <View
                                style={{ width: '100%', height: 3, backgroundColor: '#cccccc', borderRadius: 10 }}
                            ></View>
                        </TouchableOpacity>)
                    }
                </View>
            </View>
            <ScrollView contentContainerStyle={[styles.scrollcontainer]}>
                {items.map((item) => {
                    if (exibindoAtualmente == 'All') {
                        return (
                            <View key={item.id} style={styles.card}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    
                                    {item.quantidade < 0 ?
                                        (
                                            <>
                                            <Image style={{ width: 48, height: 48, borderRadius: 30 }} source={require('../../assets/icones/enviar.png')} />
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#840F74' }}>{item.destinatario}</Text>
                                            </>
                                            
                                        ) : (
                                            <>
                                            <Image style={{ width: 48, height: 48, borderRadius: 30 }} source={require('../../assets/icones/receber.png')} />
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#840F74' }}>{item.remetente}</Text>
                                            </>
                                        )}

                                </View>
                                {item.quantidade < 0 ?
                                    (
                                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#840F74' }}>{item.quantidade} {item.cripto}</Text>
                                    ) : (
                                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#840F74' }}>+{item.quantidade} {item.cripto}</Text>
                                    )}
                            </View>
                        )
                    }
                    if(exibindoAtualmente === 'Send'){
                        if(item.quantidade<0){
                            return (
                                <View key={item.id} style={styles.card}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        
                                        {item.quantidade < 0 ?
                                            (
                                                <>
                                                <Image style={{ width: 48, height: 48, borderRadius: 30 }} source={require('../../assets/icones/enviar.png')} />
                                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#840F74' }}>{item.destinatario}</Text>
                                                </>
                                                
                                            ) : (
                                                <>
                                                <Image style={{ width: 48, height: 48, borderRadius: 30 }} source={require('../../assets/icones/receber.png')} />
                                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#840F74' }}>{item.remetente}</Text>
                                                </>
                                            )}
    
                                    </View>
                                    {item.quantidade < 0 ?
                                        (
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#840F74' }}>{item.quantidade} {item.cripto}</Text>
                                        ) : (
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#840F74' }}>+{item.quantidade} {item.cripto}</Text>
                                        )}
                                </View>
                            )
                        }
                    }
                    if(exibindoAtualmente==='Request'){
                        if(item.quantidade>0){
                            return (
                                <View key={item.id} style={styles.card}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        
                                        {item.quantidade < 0 ?
                                            (
                                                <>
                                                <Image style={{ width: 48, height: 48, borderRadius: 30 }} source={require('../../assets/icones/enviar.png')} />
                                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#840F74' }}>{item.destinatario}</Text>
                                                </>
                                                
                                            ) : (
                                                <>
                                                <Image style={{ width: 48, height: 48, borderRadius: 30 }} source={require('../../assets/icones/receber.png')} />
                                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#840F74' }}>{item.remetente}</Text>
                                                </>
                                            )}
    
                                    </View>
                                    {item.quantidade < 0 ?
                                        (
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#840F74' }}>{item.quantidade} {item.cripto}</Text>
                                        ) : (
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#840F74' }}>+{item.quantidade} {item.cripto}</Text>
                                        )}
                                </View>
                            )
                        }
                    }
                })}
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    scroll: {
        width: screenWidth,
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
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
    scrollcontainer: {
        justifyContent: 'space-around',
        alignItems:'center'
    },
    card: {
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: 'rgba(242, 242, 242, 0.3)',
        width: screenWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 20,
        padding: 10,
        marginTop: 16
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
    icones3: {
        width: 30,
        height: 30,
    },
    BottomInvisible: {
        width: 70,
        height: 70,
    },
    header: {
        paddingBottom:30,
        paddingTop: 80,
        width: '100%',
        alignItems: 'center',
    }
})

export default History;