import {TextInput, Button,Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function Home() {
    return (
        <View style = {styles.container}>
            <Image style={styles.Image} source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Flamengo-RJ_%28BRA%29.png',
            }}
            />
            <Button title='Salvar' color={'blue'} />

            <TouchableOpacity
                style={{
                    borderWidth:1,
                    borderColor:'#0d166bff',
                    marginVertical:8,
                    padding:4,
                    borderRadius:4,
                    backgroundColor:'#5766eeff',
                }}
                activeOpacity={0.6}
            >
                <Text style={styles.text}>Tela de Perfil</Text>
                
            </TouchableOpacity>    

            <Text style={styles.text}>Bem Vindo, Tela inicial</Text>

            <TextInput
                   style={styles.input} 
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',     // eixo horizontal
        justifyContent: 'center', // eixo vertical
        backgroundColor: '#6aabb8ff',
        gap:20,
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
    input:{
        width: '50%',
        color: '#fff',
        borderColor:'#aaa',
        borderWidth: 1,
        backgroundColor: '#fff',
        height: 20,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 20,

    }
})