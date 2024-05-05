import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import ProgressCircle from '../../components/ProgressCircle/ProgressCircle';
import back from "../../assets/MetaIcons/back.png"
import settingsIcon from "../../assets/icones/settingsIcon.png"

export default function AllGoals({ metasData }) {
    const [metas, setMetas] = useState(metasData);


    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                    <Image style={{ tintColor: '#000' }} source={back} />
                </TouchableOpacity>
                <Text>Your Goals</Text>
                <Image source={settingsIcon}/>
            </View>
            {metas !== null && metas.map((meta) => {
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
            })}

        </View>
    )
}

const styles = StyleSheet.create({
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
        marginTop: 20
    },
    header:{
        paddingTop: 70,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})