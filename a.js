import { View, Text} from 'react-native'

export default function Home() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',     // eixo horizontal
                justifyContent: 'center', // eixo vertical
                backgroundColor: '#000',
            }}
        >
            <Text
                style={{
                    color: '#fff',
                }}
            
            > Bem Vindo, Tela inicial </Text>
        </View>
    );
}
