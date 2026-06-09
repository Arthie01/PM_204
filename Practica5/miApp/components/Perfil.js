import { Text, Image, View } from "react-native";

export const Perfil = ()=>{
    return (
            <View>
                <Image source={require('../assets/UPQ-Logo.png')}/> 
                <Text>Artemio Hurtado Hernandez</Text> 
                <Text>Sistemas Computacionales</Text>
                <Text>Programacion movil</Text> 
                <Text>Profesor Ivan Isay GUerra Lopez</Text>
                <Text>9no cuatrimestre</Text> 
            </View>
    )
} 