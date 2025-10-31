import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador Moderno</Text>

      <View style={styles.card}>
        <Text style={styles.valor}>{contador}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.botao, styles.botaoAumentar]}
            onPress={() => setContador(contador + 1)}
          >
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>

          
        </View>

        <TouchableOpacity
          style={[styles.botaoZerar]}
          onPress={() => setContador(0)}
        >
          <Text style={styles.textoZerar}>Zerar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container geral
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111827', // azul bem escuro moderno
    padding: 20,
  },

  // Título
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
    letterSpacing: 1,
  },

  card: {
    backgroundColor: '#1f2937',
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 30,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    
  },

  // Valor do contador
  valor: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#60a5fa', // azul claro
    marginBottom: 30,
  },

  // botões de + e -
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 25,
  },

  // Botões principais
  botao: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botaoAumentar: {
    backgroundColor: '#22c55e', 
  },
  
  textoBotao: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  
  botaoZerar: {
    marginTop: 10,
    backgroundColor: '#3b82f6', 
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  textoZerar: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
