import { StyleSheet, View, FlatList } from 'react-native';
import backgroundimg from '../../assets/Backgrounds/Onboarding/Onboarding1.png';
import backgroundimg2 from '../../assets/Backgrounds/Onboarding/Onboarding2.png';
import Onboarding1 from '../../components/Onboarding1/Onboarding1';
import { useRef } from 'react';
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

export default function Onboarding() {
    const flatListRef = useRef(null);
    const scrollToNextItem = () => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({
                index: 1,
                animated: true,
            });
        }
    };
    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
