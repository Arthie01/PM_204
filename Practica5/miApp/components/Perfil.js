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