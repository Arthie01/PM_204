/*ZONA1: importaciones compponentes y archivos*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import TarjetaScreen from './TarjetaScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import TextInputAlertScreen from './TextInputAlertScreen';
import FlatListSectionScreen from './FlatListSectionScreen';
import ImageBackgroundSlapshScreen from './ImageBackgroundSlapshScreen';
import ModalBottomScreen from './ModalBottomScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch (screen) {
        case 'tarjetas':
            return <TarjetaScreen />;
        case 'SafeArea':
            return <SafeAreaScreen />;
        case 'Pressable':
            return <PressableScreen />;
        case 'TextInput':
            return <TextInputAlertScreen />;
        case 'FlatList':
            return <FlatListSectionScreen />;
        case 'Image':
            return <ImageBackgroundSlapshScreen />;
        case 'Activity':
            return <ActivityIndicatorScreen />;
        case 'Modal':
            return <ModalBottomScreen />;
        case 'menu':
        default:
            return (
                <View style={styles.menuContainer}>
                    <View style={styles.container}>
                        <Button title='Practica Tarjetas' onPress={() => setScreen('tarjetas')} />
                    </View>

                    <View style={styles.container}>
                        <Button title='Practica SafeArea' onPress={() => setScreen('SafeArea')} />
                    </View>

                    <View style={styles.container}>
                        <Button title='Practica Pressable & switch' onPress={() => setScreen('Pressable')} />
                    </View>

                    <View style={styles.container}>
                        <Button title='Practica TextInput & Alert' onPress={() => setScreen('TextInput')} />
                    </View>

                    <View style={styles.container}>
                        <Button title='Practica FlatList & section' onPress={() => setScreen('FlatList')} />
                    </View>

                    <View style={styles.container}>
                        <Button title='Practica ImageBackground & SplashScreen' onPress={() => setScreen('Image')} />
                    </View>

                    <View style={styles.container}>
                        <Button title='Practica ActivityIndicator & keyboardAvoiding' onPress={() => setScreen('Activity')} />
                    </View>

                    <View style={styles.container}>
                        <Button title='Practica Modal & Bottom sheet' onPress={() => setScreen('Modal')} />
                    </View>

                    <StatusBar style="auto" />
                </View>
            );
    }
}

/*ZONA3: estilos y posicionamientos*/

const styles = StyleSheet.create({
    menuContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    container: {
        paddingVertical: 8,
        alignItems: 'center',
    },
});