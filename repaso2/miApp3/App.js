/* ZONA 1: Importaciones */
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import SplashScreen from './components/SplashScreen';
import FormularioLibro from './components/FormularioLibro';
import ListaLibros from './components/ListaLibros';

/* ZONA 2: Componente principal */
export default function App() {
  const [appLista, setAppLista] = useState(false);
  const [libros, setLibros] = useState([]);

  const agregarLibro = (libro) => {
    setLibros([...libros, libro]);
  };

  // SplashScreen durante 2 segundos
  if (!appLista) {
    return <SplashScreen onFinish={() => setAppLista(true)} />;
  }

  // Pantalla principal
  return (
    <ImageBackground
      source={require('./assets/Castillo_de_Peach_Super_Mario_64.webp')}
      style={styles.fondo}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.contenedor}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Text style={styles.titulo}>Catálogo de Libros</Text>

        <FormularioLibro onAgregar={agregarLibro} />

        <Text style={styles.total}>Total de libros: {libros.length}</Text>

        <ListaLibros libros={libros} />

        <StatusBar style="light" />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

/* ZONA 3: Estilos */
const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contenedor: {
    flex: 1,
    padding: 15,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
});
