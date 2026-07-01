/*ZONA1: importaciones compponentes y archivos*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, SectionList} from 'react-native';


export default function SafeAreaScreen() {

    const frutas= [
        {id: '1', nombre: 'Manzana'},
        {id:'2', nombre: 'durazno'},
        {id: '3', nombre: 'papaya'},
        {id:'4', nombre: 'fresas'},
        {id: '5', nombre: 'cereza'},
        {id:'6', nombre: 'uvas'},
    ]


    const tareas=[
        {titulo: 'dia', data: ['desayunar', 'realizar ejercicio']},
        {titulo: 'tarde', data: ['Estudiar', 'hacer la tarea']},
        {titulo: 'noche', data:['estudiar', 'dormir']}
    ]
return (
    <View style={styles.container}>

        <Text style={styles.titulo}>Flatlist</Text>
        <FlatList
            data={frutas}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <View style={styles.tarjeta}>
                    <Text style={styles.texto}>{item.nombre}</Text>
                </View>
            )}
        />

        <Text style={styles.titulo}>SectionList</Text>
        <SectionList
            sections={tareas}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
                <View style={styles.tarjeta}>
                    <Text style={styles.seccionTitulo}>{item}</Text>
                </View>
            )}

        renderSectionHeader={({section}) => (
            <Text style={styles.seccionTitulo}>{section.titulo}</Text>
        )}
        
        />

    <StatusBar style="auto" />
    </View>
);
}

/*ZONA3: estilos y posicionamientos*/

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#fff', padding: 10, width: '100%'},
    titulo: { fontSize: 18, fontWeight: '700', backgroundColor: '#111', color: '#fff', padding: 6, marginTop: 10},
    seccionTitulo: {fontSize: 15, fontWeight: '700', backgroundColor: '#e9ecef', padding: 6, marginTop: 6},
    tarjeta: {backgroundColor: '#f4f4f4', padding: 10, marginBottom: 6, borderRadius: 6},
    texto: {fontSize: 14, color: '#222'}
})
