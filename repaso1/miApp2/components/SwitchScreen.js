import { StyleSheet, Text, View, Switch } from 'react-native';

export default function SwitchScreen({ asistira, setAsistira, constancia, setConstancia, deportes, setDeportes }) {
    return (
        <View>
            <Text style={styles.titulo}>Opciones</Text>

            <View style={styles.row}>
                <Text style={styles.label}>¿Asistirá al taller?</Text>
                <Switch
                    value={asistira}
                    onValueChange={setAsistira}
                    trackColor={{false: '#d3d3d3', true: '#2dd4bf'}}
                    thumbColor="#ffffff"
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>¿Requiere constancia?</Text>
                <Switch
                    value={constancia}
                    onValueChange={setConstancia}
                    trackColor={{false: '#d3d3d3', true: '#2dd4bf'}}
                    thumbColor="#ffffff"
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>¿Participará en deportes?</Text>
                <Switch
                    value={deportes}
                    onValueChange={setDeportes}
                    trackColor={{false: '#d3d3d3', true: '#2dd4bf'}}
                    thumbColor="#ffffff"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12,
        marginTop: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    label: {
        fontSize: 14,
        color: '#333',
    },
});
