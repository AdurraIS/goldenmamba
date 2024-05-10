import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { supabase } from '../../../shared/CreateClient';
export default function CardCreateModal({ visible, onClose, adicionarCartao, walletId, setCards, cards }) {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCVC] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const vWalletId = walletId;

    const validateCardNumber = (number) => {
        const regex = /^[0-9]{16}$/;
        return regex.test(number);
    };

    const validateExpiryDate = (date) => {
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        return regex.test(date);
    };

    const formatCardNumber = (number) => {
        return number.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    };

    async function handleSubmit() {
        if (!validateCardNumber(cardNumber)) {
            setError('Número do cartão inválido');
            return;
        }

        if (!validateExpiryDate(expiryDate)) {
            setError('Data de expiração inválida (MM/AA)');
            return;
        }

        const formattedCardNumber = formatCardNumber(cardNumber);
        const data = {
            idUsuario: vWalletId,
            cardNumber: formattedCardNumber,
            expiryDate: expiryDate,
            cvc: cvc,
            cardholderName: cardholderName,
            address: address,
        }
        try {
            // Insere os dados do cartao na tabela 'cartoes'
            const { error: insertError } = await supabase
                .from('cartoes')
                .insert({
                    idUsuario: vWalletId,
                    cardNumber: formattedCardNumber,
                    expiryDate: expiryDate,
                    cvc: cvc,
                    cardholderName: cardholderName,
                    address: address,
                });
            if (insertError) {

                throw new Error(insertError.message);
            }

        } catch (error) {
            alert("Erro: " + error.message);
        }
        adicionarCartao(data);
        setCards([...cards, data])
  
        clearInputs()
        onClose();
    };
    function clearInputs(){
        setCVC('');
        setAddress('');
        setCardNumber('');
        setCardholderName('');
        setExpiryDate('');
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
                    <Text style={styles.modalTitle}>Informações do Cartão</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Número do Cartão"
                        value={cardNumber}
                        onChangeText={setCardNumber}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Data de Expiração (MM/AA)"
                        value={expiryDate}
                        onChangeText={setExpiryDate}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="CVC/CVV"
                        value={cvc}
                        onChangeText={setCVC}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do Titular do Cartão"
                        value={cardholderName}
                        onChangeText={setCardholderName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Endereço"
                        value={address}
                        onChangeText={setAddress}
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
