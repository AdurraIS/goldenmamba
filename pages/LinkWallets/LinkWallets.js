import '@walletconnect/react-native-compat'
import { Web3Modal } from '@web3modal/wagmi-react-native'
import { W3mButton } from '@web3modal/wagmi-react-native'
import { View } from 'react-native'


export default function LinkWallets() {
    return (
        <>
            <Web3Modal />
            <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <W3mButton />
            </View>
        </>
    )
}