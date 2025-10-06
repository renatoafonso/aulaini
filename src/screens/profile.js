import { Image, View, Text, StyleSheet} from 'react-native'

export default function Profile() {
    return (
        <View style = {styles.meucontainer}>
            <Image style={styles.minhaimagem} source={{
                 uri: 'https://github.com/renatoafonso/aulaini/blob/main/assets/imagens/imagem.png',
                }}
            />
            <Text style={styles.meutexto}>Tela de perfil</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    meucontainer: {
        flex: 1,
        alignItems: 'center',     // eixo horizontal
        justifyContent: 'center', // eixo vertical
        backgroundColor: '#8eedf7ff',
    },
    meutexto: {
        color: '#000000ff',
	    fontWeight: 'bold',

    },
    minhaimagem: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
})

