/*Perfil usanod desesctructuracion*/

import { Text, Image, View, Button} from "react-native";
import React , {useState} from 'react';

export const Perfil = ({nombre, carrera, materia, profesor, cuatri})=>{
    const [mostrar, setMostrar] = useState(false)
    return (
            <View>
                <Image source={require('../assets/UPQ-Logo.png')}/> 
                <Text>{nombre}</Text> 

                {mostrar &&
                <>
                <Text>{carrera}</Text>
                <Text>{materia}</Text> 
                <Text>{profesor}</Text>
                <Text>{cuatri}</Text> 
                </>
                }
                <Button title="Ver perfil" onPress={()=>setMostrar(!mostrar)}/>


            </View>
    )
} 
















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