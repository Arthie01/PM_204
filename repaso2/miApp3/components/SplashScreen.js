/* ZONA 1: Importaciones */
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/* ZONA 2: Componente principal */
export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const temporizador = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(temporizador);
  }, []);

  return (
    <View style={styles.splash}>
      <Image
        source={require('../assets/icon.png')}
        style={styles.imagen}
      />
      <Text style={styles.titulo}>repaso2</Text>
    </View>
  );
}

/* ZONA 3: Estilos */
const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
});
