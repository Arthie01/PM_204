/* ZONA 1: Importaciones */
import { StyleSheet, Text, View, FlatList } from 'react-native';

/* ZONA 2: Componente principal */
export default function ListaLibros({ libros }) {
  return (
    <FlatList
      data={libros}
      keyExtractor={(item) => item.id}
      style={styles.lista}
      renderItem={({ item }) => (
        <View style={styles.tarjeta}>
          <Text style={styles.tituloLibro}>{item.titulo}</Text>
          <Text style={styles.texto}>Autor: {item.autor}</Text>
          <Text style={styles.texto}>Género: {item.genero}</Text>
        </View>
      )}
    />
  );
}

/* ZONA 3: Estilos */
const styles = StyleSheet.create({
  lista: {
    width: '100%',
    marginTop: 10,
  },
  tarjeta: {
    backgroundColor: '#f4f4f4dd',
    padding: 10,
    marginBottom: 6,
    borderRadius: 6,
  },
  tituloLibro: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },
  texto: {
    fontSize: 14,
    color: '#222',
  },
});
