import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Platform, ScrollView } from 'react-native';
import Labels from './components/labels';
import SwitchScreen from './components/SwitchScreen';

function mostrarAlerta(titulo, mensaje) {
  if (Platform.OS === 'web') {
    window.alert(titulo + '\n\n' + mensaje);
  } else {
    Alert.alert(titulo, mensaje);
  }
}

export default function App() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [asistira, setAsistira] = useState(true);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(true);

  const enviarRegistro = () => {
    if (!nombre.trim() || !carrera.trim() || !semestre.trim()) {
      mostrarAlerta('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    if (isNaN(semestre) || semestre.trim() === '') {
      mostrarAlerta('Error', 'El semestre debe ser un número.');
      return;
    }

    const resumen =
      `Nombre: ${nombre}\n` +
      `Carrera: ${carrera}\n` +
      `Semestre: ${semestre}\n\n` +
      `Taller: ${asistira ? 'Sí' : 'No'}\n` +
      `Constancia: ${constancia ? 'Sí' : 'No'}\n` +
      `Deportes: ${deportes ? 'Sí' : 'No'}`;

    mostrarAlerta('Registro enviado', resumen);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <Text style={styles.title}>Registro de Evento Universitario</Text>
          <Labels
            nombre={nombre} setNombre={setNombre}
            carrera={carrera} setCarrera={setCarrera}
            semestre={semestre} setSemestre={setSemestre}
          />
          <SwitchScreen
            asistira={asistira} setAsistira={setAsistira}
            constancia={constancia} setConstancia={setConstancia}
            deportes={deportes} setDeportes={setDeportes}
          />
          <TouchableOpacity style={styles.boton} onPress={enviarRegistro}>
            <Text style={styles.botonTexto}>Enviar Registro</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  boton: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
