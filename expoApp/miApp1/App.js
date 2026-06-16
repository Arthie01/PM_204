import { useState } from 'react'; // Hook para manejar estado reactivo
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'; // Importar componentes nativos

export default function App() { // Componente principal de la app
  const [nombre, setNombre] = useState(''); // Estado 1: Nombre del usuario
  const [email, setEmail] = useState(''); // Estado 2: Email del usuario
  const [pass, setPass] = useState(''); // Estado 3: Contraseña del usuario
  const [numero, setNumero] = useState(''); // Estado 4: Número/Edad
  const [telefono, setTelefono] = useState(''); // Estado 5: Teléfono del usuario
  const [busqueda, setBusqueda] = useState(''); // Estado 6: Término de búsqueda
  const [comentario, setComentario] = useState(''); // Estado 7: Comentario multiline
  const [decimal, setDecimal] = useState(''); // Estado 8: Número decimal/precio

  return ( // Retorna el JSX a renderizar
    <ScrollView style={styles.container}> {/* Contenedor con scroll si hay mucho contenido */}
      <Text style={styles.title}>Ejemplos de TextInput</Text> {/* Título de la página */}

      {/* EJEMPLO 1: TextInput con capitalización */}
      <Text style={styles.label}>Nombre</Text> {/* Etiqueta para el usuario */}
      <TextInput // Input de texto normal
        value={nombre} // Vincula el estado al valor mostrado
        onChangeText={setNombre} // Actualiza estado cuando escribe
        placeholder="Juan Pérez" // Texto de guía que desaparece al escribir
        autoCapitalize="words" // Capitaliza la primera letra de cada palabra
        placeholderTextColor="#ccc" // Color gris del placeholder
        style={styles.input} // Aplica estilos del objeto styles
      />

      {/* EJEMPLO 2: TextInput especializado para email */}
      <Text style={styles.label}>Email</Text> {/* Etiqueta para el usuario */}
      <TextInput // Input para correo electrónico
        value={email} // Vincula el estado al valor mostrado
        onChangeText={setEmail} // Actualiza estado cuando escribe
        placeholder="usuario@ejemplo.com" // Formato de ejemplo
        keyboardType="email-address" // Teclado con @ y punto
        autoCapitalize="none" // NO capitaliza nada
        placeholderTextColor="#ccc" // Color del placeholder
        style={styles.input} // Aplica estilos del objeto styles
      />

      {/* EJEMPLO 3: TextInput oculto para contraseña */}
      <Text style={styles.label}>Contraseña</Text> {/* Etiqueta para el usuario */}
      <TextInput // Input para contraseña
        value={pass} // Vincula el estado al valor mostrado
        onChangeText={setPass} // Actualiza estado cuando escribe
        placeholder="••••••••" // Viñetas como referencia visual
        secureTextEntry={true} // Oculta el texto con viñetas
        maxLength={20} // Máximo 20 caracteres permitidos
        placeholderTextColor="#ccc" // Color del placeholder
        style={styles.input} // Aplica estilos del objeto styles
      />

      {/* EJEMPLO 4: TextInput solo para números */}
      <Text style={styles.label}>Edad (solo números)</Text> {/* Etiqueta para el usuario */}
      <TextInput // Input numérico
        value={numero} // Vincula el estado al valor mostrado
        onChangeText={setNumero} // Actualiza estado cuando escribe
        placeholder="25" // Número de ejemplo
        keyboardType="numeric" // Teclado solo con números
        placeholderTextColor="#ccc" // Color del placeholder
        style={styles.input} // Aplica estilos del objeto styles
      />

      {/* EJEMPLO 5: TextInput para teléfono */}
      <Text style={styles.label}>Teléfono</Text> {/* Etiqueta para el usuario */}
      <TextInput // Input para teléfono
        value={telefono} // Vincula el estado al valor mostrado
        onChangeText={setTelefono} // Actualiza estado cuando escribe
        placeholder="55-1234-5678" // Formato de teléfono de ejemplo
        keyboardType="phone-pad" // Teclado con números y símbolos (+, -, (), etc)
        placeholderTextColor="#ccc" // Color del placeholder
        style={styles.input} // Aplica estilos del objeto styles
      />

      {/* EJEMPLO 6: TextInput para búsqueda */}
      <Text style={styles.label}>Búsqueda</Text> {/* Etiqueta para el usuario */}
      <TextInput // Input para búsqueda
        value={busqueda} // Vincula el estado al valor mostrado
        onChangeText={setBusqueda} // Actualiza estado cuando escribe
        placeholder="🔍 Buscar..." // Ícono lupa y texto de ejemplo
        returnKeyType="search" // Muestra botón "search" en teclado
        placeholderTextColor="#ccc" // Color del placeholder
        style={styles.input} // Aplica estilos del objeto styles
      />

      {/* EJEMPLO 7: TextInput para decimales */}
      <Text style={styles.label}>Precio (decimales)</Text> {/* Etiqueta para el usuario */}
      <TextInput // Input para números con decimales
        value={decimal} // Vincula el estado al valor mostrado
        onChangeText={setDecimal} // Actualiza estado cuando escribe
        placeholder="19.99" // Precio de ejemplo con punto decimal
        keyboardType="decimal-pad" // Teclado numérico con punto decimal
        placeholderTextColor="#ccc" // Color del placeholder
        style={styles.input} // Aplica estilos del objeto styles
      />

      {/* EJEMPLO 8: TextInput multiline como área de texto */}
      <Text style={styles.label}>Comentario (multiline)</Text> {/* Etiqueta para el usuario */}
      <TextInput // Input para múltiples líneas
        value={comentario} // Vincula el estado al valor mostrado
        onChangeText={setComentario} // Actualiza estado cuando escribe
        placeholder="Escribe tu comentario aquí..." // Instrucción de ejemplo
        multiline={true} // Permite saltos de línea
        numberOfLines={4} // Altura equivalente a 4 líneas
        textAlignVertical="top" // Alinea el texto al inicio superior
        placeholderTextColor="#ccc" // Color del placeholder
        style={[styles.input, styles.multiline]} // Combina dos estilos
      />

      {/* SECCIÓN DE RESUMEN: Muestra en tiempo real lo que el usuario escribió */}
      <View style={styles.resumen}> {/* Contenedor del resumen */}
        <Text style={styles.resumenText}>Datos ingresados:</Text> {/* Encabezado del resumen */}
        <Text style={styles.resumenText}>👤 {nombre || 'Nombre...'}</Text> {/* Muestra nombre o texto default */}
        <Text style={styles.resumenText}>📧 {email || 'Email...'}</Text> {/* Muestra email o texto default */}
        <Text style={styles.resumenText}>🔒 {pass ? '••• (ingresado)' : 'No ingresado'}</Text> {/* Si hay contraseña muestra viñetas, sino "No ingresado" */}
        <Text style={styles.resumenText}>🎂 {numero || 'Edad...'}</Text> {/* Muestra número o texto default */}
      </View>
    </ScrollView> {/* Cierra el ScrollView */}
  ); // Cierra el return
} // Cierra la función App

const styles = StyleSheet.create({ // Crea objeto de estilos
  container: { // Estilo principal del contenedor
    flex: 1, // Ocupa todo el espacio disponible
    backgroundColor: '#f5f5f5', // Fondo gris muy claro
    padding: 20, // Espaciado interno de 20 píxeles
  },
  title: { // Estilo del título principal
    fontSize: 24, // Tamaño de letra grande (24)
    fontWeight: 'bold', // Texto en negrita
    marginBottom: 20, // Espacio abajo de 20 píxeles
    color: '#333', // Color gris oscuro casi negro
  },
  label: { // Estilo de las etiquetas (Nombre, Email, etc)
    fontSize: 14, // Tamaño de letra pequeño (14)
    fontWeight: '600', // Semi-negrita
    color: '#555', // Color gris medio
    marginTop: 15, // Espacio arriba de 15 píxeles
    marginBottom: 8, // Espacio abajo de 8 píxeles
  },
  input: { // Estilo de todos los TextInput
    borderWidth: 2, // Grosor del borde de 2 píxeles
    borderColor: '#007AFF', // Color del borde azul
    borderRadius: 8, // Esquinas redondeadas de 8 píxeles
    paddingHorizontal: 15, // Espacio interno izquierda-derecha
    paddingVertical: 12, // Espacio interno arriba-abajo
    fontSize: 16, // Tamaño de letra del texto ingresado
    backgroundColor: '#fff', // Fondo blanco
    marginBottom: 10, // Espacio abajo de cada input
  },
  multiline: { // Estilo especial para el input multiline
    height: 100, // Altura fija de 100 píxeles
    paddingTop: 12, // Espacio interno arriba
    textAlignVertical: 'top', // Alinea el texto al inicio superior
  },
  resumen: { // Estilo del contenedor de resumen
    marginTop: 30, // Espacio arriba de 30 píxeles
    padding: 20, // Espaciado interno de 20 píxeles
    backgroundColor: '#e8f4f8', // Fondo azul claro
    borderRadius: 10, // Esquinas muy redondeadas
    marginBottom: 30, // Espacio abajo de 30 píxeles
  },
  resumenText: { // Estilo del texto dentro del resumen
    fontSize: 16, // Tamaño de letra mediado (16)
    color: '#333', // Color gris oscuro
    marginVertical: 5, // Espacio arriba y abajo
    fontWeight: '500', // Semi-negrita (no tan fuerte como bold)
  },
});
