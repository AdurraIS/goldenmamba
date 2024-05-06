import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MetaBody = ({ valorAtual, valorMeta, dataMeta }) => {
    const porcentagem = (valorAtual / valorMeta) * 100;
    return (
        <View style={styles.container}>
            <Text style={styles.valorMeta}>${valorMeta}</Text>
            <Text style={styles.dataMeta}>Due in {dataMeta}</Text>
            <View style={[ styles.porcentagemRestante, {flexDirection: 'row', width: '100%', borderRadius:50, overflow: 'hidden'}]}>

                <Text style={styles.textPorcentagem}>{porcentagem}%</Text>
                
                <View style={[styles.porcentagem, {width: `${porcentagem}%` }]}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 50,
        gap:10
    },
    valorMeta: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    dataMeta:{
        fontSize: 8
    },
    porcentagem: {
        backgroundColor: '#230021',
        paddingLeft: 5,
        height: 28,
        margin:0,
        zIndex: 0,
    },
    textPorcentagem:{
        fontSize: 13,
        fontWeight: 'bold',
        position: 'absolute',
        color: '#EBC7E9',
        zIndex: 1,
        paddingLeft: 10
    },
    porcentagemRestante: {
        backgroundColor: '#BB35A9',
        height: 28,
        margin:0,
        alignItems: 'center',
    }
});

export default MetaBody;