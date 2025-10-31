import { Link, useRouter } from 'expo-router';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Root() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 Bem-vindo ao Expo Router!</Text>
      <Text style={styles.subtitle}>
        Escolha uma das opções abaixo para navegar:
      </Text>

      {/* Links estilizados */}
      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => router.push('/home')}
      >
        <Text style={styles.linkText}>🏠 Ir para Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => router.push('/contador')}
      >
        <Text style={styles.linkText}>🔢 Ir para Contador</Text>
      </TouchableOpacity>

      {/* Linha divisória */}
      <View style={styles.divisor} />

      {/* Link tradicional (extra) */}
      <Link href="/home" style={styles.secondaryLink}>
        Acessar Home (via Link)
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 20,
  },
  linkButton: {
    backgroundColor: '#346beb',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 4, // sombra no Android
  },
  linkText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  divisor: {
    height: 1,
    backgroundColor: '#333',
    width: '70%',
    marginVertical: 20,
  },
  secondaryLink: {
    color: '#6ca0ff',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});
