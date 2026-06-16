/*ZONA1: importaciones compponentes y archivos*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function SafeAreaScreen() {
return (
    <View style={styles.container}>

        <Text>Aqui va la practica de FlatList & section</Text>
        
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
    flexDirection: 'column-reverse',
},

});
