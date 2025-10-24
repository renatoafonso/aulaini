import { Link } from 'expo-router';
import { Button,Text, View } from 'react-native';
import { useRouter } from 'expo-router';


export default function Root() {
    const router = useRouter();
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#222',
            }}
        >
            <Text
                style={{
                    color: '#fff',
                }}
            >
            Welcome to Expo Router!
            </Text>
            <Link 
                href={'/home'}
                style={{
                    color: '#346beb',
                    textDecorationLine: 'underline'
                }}
                >Ir pata Home
            </Link>
            <Button
                title="Ir para Home"
                color="#346beb"
                onPress={() => router.push('/home')}
            />
        </View>
    )
}