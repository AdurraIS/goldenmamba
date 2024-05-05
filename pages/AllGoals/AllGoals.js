import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import ProgressCircle from '../../components/ProgressCircle/ProgressCircle';
import back from "../../assets/MetaIcons/back.png"
import settingsIcon from "../../assets/icones/settingsIcon.png"


export default function AllGoals({ metasData }) {
    const [metas, setMetas] = useState(metasData);
    const [exibindoAtualmente, setExibindo] = useState('OnProgress');

    const doneSelected = () => {
        setExibindo('done')
    };

    const OnProgressSelected = () => {
        setExibindo('OnProgress')
    };
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                    <Image style={{ tintColor: '#000' }} source={back} />
                </TouchableOpacity>
                <Text>Your Goals</Text>
                <Image source={settingsIcon} />
            </View>
            <View
                style={[{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: 10
                }
                ]}
            >
                <View style={[{ flexDirection: 'column', alignItems: 'center', width: '50%' }]}>

                    {exibindoAtualmente == 'OnProgress' ? (
                        <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={OnProgressSelected}>
                            <Text onPress={OnProgressSelected} style={[styles.textHeader]}>On Progress</Text>
                            <View
                                style={{ width: '100%', height: 5, backgroundColor: '#840f74', borderRadius: 10 }}
                            ></View>
                        </TouchableOpacity>) : (
                        <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={OnProgressSelected}>
                            <Text onPress={OnProgressSelected} style={[styles.textHeaderGray]}>On Progress</Text>
                            <View
                                style={{ width: '100%', height: 3, backgroundColor: '#cccccc', borderRadius: 10 }}
                            ></View>
                        </TouchableOpacity>)
                    }

                </View>
                <View style={[{ flexDirection: 'column', alignItems: 'center', width: '50%' }]}>
                    {exibindoAtualmente == 'done' ? (
                        <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={doneSelected}>
                            <Text onPress={doneSelected} style={[styles.textHeader]}>Done</Text>
                            <View
                                style={{ width: '100%', height: 5, backgroundColor: '#840f74', borderRadius: 10 }}
                            ></View>
                        </TouchableOpacity>) : (
                        <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={doneSelected}>
                            <Text onPress={doneSelected} style={[styles.textHeaderGray]}>Done</Text>
                            <View
                                style={{ width: '100%', height: 3, backgroundColor: '#cccccc', borderRadius: 10 }}
                            ></View>
                        </TouchableOpacity>)
                    }
                </View>
            </View>
            <ScrollView>
                {metas !== null && metas.map((meta) => {
                    if (exibindoAtualmente === "done") {
                        if (meta.valorAtual === meta.valorMeta) {
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
                        }
                    }
                    if (exibindoAtualmente === 'OnProgress') {
                        if (meta.valorAtual < meta.valorMeta) {
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
                        }

                    }

                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
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