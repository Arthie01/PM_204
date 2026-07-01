import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Labels({ nombre, setNombre, carrera, setCarrera, semestre, setSemestre }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre completo</Text>
            <TextInput
                value={nombre}
                onChangeText={setNombre}
                placeholder="Artemio Hurtado"
                keyboardType="default"
                autoCapitalize="words"
                style={styles.input}
            />
            <Text style={styles.label}>Carrera</Text>
            <TextInput
                value={carrera}
                onChangeText={setCarrera}
                placeholder="Ingenieria en Sistemas"
                keyboardType="default"
                autoCapitalize="words"
                style={styles.input}
            />
            <Text style={styles.label}>Semestre</Text>
            <TextInput
                value={semestre}
                onChangeText={setSemestre}
                placeholder="4"
                keyboardType="numeric"
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
    },
    label: { fontSize: 16, color: '#333', marginTop: 16, marginBottom: 4 },
    input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 6, padding: 12, fontSize: 15, marginBottom: 4, width: '100%' },
});
