// Importações necessárias do React Native
import { StyleSheet, View, FlatList } from 'react-native';
import { useRef } from 'react';

// Importações das imagens usadas no Onboarding
import backgroundimg from '../../assets/Backgrounds/Onboarding/Onboarding1.png';
import backgroundimg2 from '../../assets/Backgrounds/Onboarding/Onboarding2.png';

// Importação do componente Onboarding1
import Onboarding1 from '../../components/Onboarding1/Onboarding1';

// Dados para renderizar os itens do Onboarding
const data = [
    {
        id: 1,
        background: backgroundimg,
        title: 'Send Crypto',
        text: 'Send money easily and with one click everything will be sent every time you make a transaction',
        step: 1
    },
    {
        id: 2,
        background: backgroundimg2,
        title: 'Request Crypto',
        text: 'You can request money to friends or family to send as much money as you want',
        step: 2
    }
];

// Componente Onboarding
export default function Onboarding() {
    // Referência para a FlatList
    const flatListRef = useRef(null);

    // Função para rolar para o próximo item
    const scrollToNextItem = () => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({
                index: 1,
                animated: true,
            });
        }
    };

    // Renderização do componente
    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                {/* FlatList para renderizar os itens do Onboarding */}
                <FlatList
                    ref={flatListRef}
                    data={data}
                    horizontal
                    pagingEnabled
                    bounces={false}
                    scrollEventThrottle={32}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <Onboarding1 item={item} scrollToNext={scrollToNextItem} />}
                />
            </View>
        </View>
    );
}

// Estilos para o componente Onboarding
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
