import { View, Text, StyleSheet} from 'react-native'
export default function Testes() {
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', backgroundColor: '#111' }}>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    meutexto: {
            color: '#fff',
            fontWeight: 'bold',
    },
    box: {
        width: 50,
        // height: 50,
        backgroundColor: '#4CAF50',
        margin: 5,
    },
});
