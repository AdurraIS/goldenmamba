import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { supabase } from '../../../shared/CreateClient';

export default function GoalCreateModal({ visible, onClose, walletId, adicionarMeta, setMetas, metas }) {
    const [valorAtual, setValorAtual] = useState('');
    const [valorMeta, setValorMeta] = useState('');
    const [titulo, setTitulo] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [dataMeta, setDataMeta] = useState('');
    const [error, setError] = useState('');
    const vWalletId = walletId;
    const validateImageUrl = (url) => {
        // Expressão regular para validar URL
        const regex = /^(ftp|http|https):\/\/[^ "]+$/;
        return regex.test(url);
    };

    const validateDataMeta = (date) => {
        // Expressão regular para validar data no formato DD/MM/AA
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{2}$/;
        return regex.test(date);
    };

    async function handleSubmit() {
        if (Number(valorMeta) <= Number(valorAtual)) {
            setError('O valor da meta deve ser maior que o valor atual');
            return;
        }

        if (!validateImageUrl(imageUrl)) {
            setError('A URL da imagem não é válida');
            return;
        }

        if (!validateDataMeta(dataMeta)) {
            setError('Data de meta inválida (DD/MM/AA)');
            return;
        }

        const data = {
            valorAtual: valorAtual,
            valorMeta: valorMeta,
            titulo: titulo,
            imageUrl: imageUrl,
            dataMeta: dataMeta,
            idUsuario: walletId
        };

        try {
            // Insere os dados da meta na tabela 'metas'
            const { error: insertError } = await supabase
                .from('metas')
                .insert(data);
            if (insertError) {
                throw new Error(insertError.message);
            }
        } catch (error) {
            alert("Erro: " + error.message);
        }

        adicionarMeta(data);
        setMetas([...metas, data])
        clearInputs();
        onClose();
    }

    function clearInputs() {
        setValorAtual('');
        setValorMeta('');
        setTitulo('');
        setImageUrl('');
        setDataMeta('');
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Nova Meta</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Valor Atual"
                        value={valorAtual}
                        onChangeText={setValorAtual}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Valor da Meta"
                        value={valorMeta}
                        onChangeText={setValorMeta}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Título"
                        value={titulo}
                        onChangeText={setTitulo}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="URL da Imagem"
                        value={imageUrl}
                        onChangeText={setImageUrl}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Data da Meta (DD/MM/AA)"
                        value={dataMeta}
                        onChangeText={setDataMeta}
                    />
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                    <Button title="Salvar" onPress={handleSubmit} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});
