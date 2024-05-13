import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet ,TouchableOpacity} from 'react-native';
import { supabase } from '../../../shared/CreateClient';
import { color } from 'react-native-elements/dist/helpers';
export default function CardCreateModal({ visible, onClose, adicionarCartao, walletId, setCards, cards }) {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCVC] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const vWalletId = walletId;
    
    const [inputFocused, setInputFocused] = useState({});

    const handleInputFocus = (inputName) => {
      setInputFocused({ ...inputFocused, [inputName]: true });
    };

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
                        style={[styles.input, inputFocused.input1  && styles.inputFocused]}
                        onFocus={() => handleInputFocus('input1')}
                        placeholder="Número do Cartão"
                        value={cardNumber}
                        onChangeText={setCardNumber}
                        keyboardType="numeric"
                    />
                    <View style={styles.CVCeData}>

                        <TextInput
                            style={[styles.input, inputFocused.input2  && styles.inputFocused]}
                            onFocus={() => handleInputFocus('input2')}
                            placeholder="Data de Expiração (MM/AA)"
                            value={expiryDate}
                            onChangeText={setExpiryDate}
                        />
                        <TextInput
                            style={[styles.input, inputFocused.input3  && styles.inputFocused]}
                            onFocus={() => handleInputFocus('input3')}
                            placeholder="CVC/CVV"
                            value={cvc}
                            onChangeText={setCVC}
                            keyboardType="numeric"
                            />
                            
                    </View>
                    <TextInput
                        style={[styles.input, inputFocused.input4  && styles.inputFocused]}
                        onFocus={() => handleInputFocus('input4')}
                        placeholder="Nome do Titular do Cartão"
                        value={cardholderName}
                        onChangeText={setCardholderName}
                    />
                    <Text style={styles.modalTitle}>Billing Address</Text>
                    <TextInput
                        style={[styles.input, inputFocused.input5  && styles.inputFocused]}
                        onFocus={() => handleInputFocus('input5')}
                        placeholder='Endereço'
                        value={address}
                        onChangeText={setAddress}
                    />
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                
                    <TouchableOpacity onPress={handleSubmit} style={styles.SaveButton}>
                    <Text  style={{color:'#fff', fontSize: 20, fontWeight: 900}}>save</Text>
                    </TouchableOpacity>
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
        display: 'flex',
        justifyContent:'space-around',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '90%',
        // height: '90%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    inputFocused:{
        borderWidth: 1.5,
        borderColor: '#BB35A9',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
        fontSize:16
    },
    CVCeData: {
        display: 'flex',
        height:'20%',
        width: '100%',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
},
    errorText: {
        color: '#BB35A9',
        marginBottom: 10,
    },
    buttonSombra:{
        // shadowOpacity: 0,
        // shadowColor: 100,
        // color: '#fff',
        // backgroundColor: 'red'
    },
    SaveButton:{
     padding: 10,
     backgroundColor:'#BB35A9',
     borderRadius:20,
     overflow: 'hidden',
     elevation: 0, // Remover sombra no Android
     shadowOpacity: 0,

     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center'
    },
});
