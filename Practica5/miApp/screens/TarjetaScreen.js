/*ZONA1: importaciones compponentes y archivos*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from '../components/Saludo';
import {Saludo2} from '../components/Saludo2';
import {Perfil} from '../components/Perfil'


export default function TarjetaScreen() {
return (
    <View style={styles.container}>


        <Perfil style={styles.tarjetaVerde} nombre="Artemio" carrera = "ISC" materia = "Progaramcion movil" profesor = "Ivan Isay" cuatri = "9"  />
        <Perfil style={styles.tarjetaRoja} nombre="Carlos" carrera = "IN" materia = "Progaramcion movil" profesor = "Ivan Isay" cuatri = "7"/>
        <Perfil style={styles.tarjetaVerde} nombre="Artemio" carrera = "ISC" materia = "Progaramcion movil" profesor = "Ivan Isay" cuatri = "9"  />


        

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
    justifyContent: 'space-evenly',
    flexDirection: 'row',
},

tarjetaVerde: {
        backgroundColor: 'green',
    },

tarjetaRoja: {
        backgroundColor: 'red',
    },

});
