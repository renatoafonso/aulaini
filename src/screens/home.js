import { Image, View, Text, StyleSheet} from 'react-native'

export default function Home() {
    return (
        <View style = {styles.container}>
            <Image style={styles.Image} source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Flamengo-RJ_%28BRA%29.png',
            }}
            />
            <Text style={styles.text}>Bem Vindo, Tela inicial</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',     // eixo horizontal
        justifyContent: 'center', // eixo vertical
        backgroundColor: '#111617ff',
    },
    text: {
            color: '#fff',
            fontWeight: 'bold',
          },
    Image: {
        width: 50,
        height: 50,
        borderRadius: 15,
    },
})