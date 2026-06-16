/*Perfil usanod desesctructuracion*/

import { Text, Image, View, Button, StyleSheet} from "react-native";
import React , {useState} from 'react';

export const Perfil = ({nombre, carrera, materia, profesor, cuatri, style})=>{
    const [mostrar, setMostrar] = useState(false)
    return (
            <View style={[styles.tarjeta, style]}>
                <Image source={require('../assets/UPQ-Logo.png')}/> 
                <Text style={styles.nombre}>{nombre}</Text> 

                {mostrar &&
                <>
                <Text style={styles.carrera}>{carrera}</Text>
                <Text style={styles.otroTexto}>{materia}</Text> 
                <Text>{profesor}</Text>
                <Text>{cuatri}</Text> 
                </>
                }
                <Button title="Ver perfil" onPress={()=>setMostrar(!mostrar)}/>
            </View>
    )
} 

const styles = StyleSheet.create({
    nombre: {
        fontSize: 24,
        fontWeight: 600,
        textTransform: 'uppercase',
    },
    tarjeta: {
        borderWidth: 2,
        padding: 15, 
        margin: 10,
        

    },
    carrera: {
        fontSize: 18,
        color: 'blue',
        fontFamily: 'Roboto',
    },
    otroTexto: {
        fontSize: 12,
        fontFamily: 'Roboto',
        fontStyle: 'italic',
    },
});
















/*

import { Text, Image, View } from "react-native";

export const Perfil = (props)=>{
    return (
            <View>
                <Image source={require('../assets/UPQ-Logo.png')}/> 
                <Text>{props.nombre}</Text> 
                <Text>{props.carrera}</Text>
                <Text>{props.materia}</Text> 
                <Text>{props.profesor}</Text>
                <Text>{props.cuatri}</Text> 
            </View>
    )
} 

*/ 