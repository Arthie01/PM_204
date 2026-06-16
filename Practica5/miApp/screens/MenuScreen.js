/*ZONA1: importaciones compponentes y archivos*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';
import TarjetaScreen from './TarjetaScreen';
import SafeAreaScreen from './SafeAreaScreen';


export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetaScreen/>
        case 'SafeArea':
            return <SafeAreaScreen/>
        case 'menu':
            default:

                return (
                    <View style={styles.container}>
                        <Button title= 'Practica Tarjetas' onPress={() => setScreen('tarjetas')}/>
                        <Button title = 'Practica SafeArea' onPress={() => setScreen('SafeArea')}/>


                        
                    <StatusBar style="auto" />
                    </View>
                );
                }

}

/*ZONA3: estilos y posicionamientos*/

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
},

});
