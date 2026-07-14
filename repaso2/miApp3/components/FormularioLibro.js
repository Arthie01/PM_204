/* ZONA 1: Importaciones */
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native';

/* ZONA 2: Componente principal */
export default function FormularioLibro({ onAgregar }) {
  const AZUL = '#021a57';

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [cargando, setCargando] = useState(false);

  const agregarLibro = () => {
    // Validar que todos los campos estén llenos
    if (!titulo || !autor || !genero) {
      Alert.alert('Alert', 'Todos los campos son obligatorios.');
      return;
    }

    // Simular espera de 4 segundos con ActivityIndicator
    setCargando(true);

    setTimeout(() => {
      onAgregar({
        id: Date.now().toString(),
        titulo: titulo,
        autor: autor,
        genero: genero,
      });

      // Limpiar los TextInput
      setTitulo('');
      setAutor('');
      setGenero('');
      setCargando(false);

      // Notificar con un Alert
      Alert.alert('Alert', 'Libro guardado correctamente.');
    }, 4000);
  };

  return (
    <View style={styles.formulario}>
      <TextInput
        style={styles.campoTexto}
        placeholder="Título del libro"
        placeholderTextColor="#666"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={styles.campoTexto}
        placeholder="Autor"
        placeholderTextColor="#666"
        value={autor}
        onChangeText={setAutor}
      />

      <TextInput
        style={styles.campoTexto}
        placeholder="Género"
        placeholderTextColor="#666"
        value={genero}
        onChangeText={setGenero}
      />

      {cargando ? (
        <View style={styles.cargando}>
          <ActivityIndicator size="large" color={AZUL} />
          <Text style={styles.textoCargando}>Guardando libro...</Text>
        </View>
      ) : (
        <Pressable
          style={({ pressed }) => [
            styles.boton,
            { backgroundColor: AZUL },
            pressed && styles.botonPresionado,
          ]}
          onPress={agregarLibro}
        >
          <Text style={styles.textoBoton}>Agregar Libro</Text>
        </Pressable>
      )}
    </View>
  );
}

/* ZONA 3: Estilos */
const styles = StyleSheet.create({
  formulario: {
    width: '100%',
  },
  campoTexto: {
    backgroundColor: '#ffffffcc',
    marginVertical: 6,
    padding: 12,
    fontSize: 16,
    borderRadius: 6,
  },
  boton: {
    padding: 14,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonPresionado: {
    transform: [{ scale: 0.98 }],
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cargando: {
    marginTop: 15,
    alignItems: 'center',
  },
  textoCargando: {
    marginTop: 8,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
