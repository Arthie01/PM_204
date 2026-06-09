/*ZONA1: importaciones compponentes y archivos*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';
import {Perfil} from './components/Perfil'


export default function App() {
  return (
    <View style={styles.container}>

      <Image source={require('./assets/wave.png')}/>
      <Text>Hola mundo RN</Text>

        <Perfil nombre="Artemio" carrera = "ISC" materia = "Progaramcion movil" profesor = "Ivan Isay" cuatri = "9"></Perfil>
        <Perfil nombre="Carlos" carrera = "IN" materia = "Progaramcion movil" profesor = "Ivan Isay" cuatri = "7"></Perfil>

        

      <StatusBar style="auto" />
    </View>
  );
}

/*ZONA3: estilos y posicionamientos*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
