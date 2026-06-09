

const persona = {
    nombre: "Artemio Hurtado",
    edad: 21,
    direccion: {
        ciudad: "Qro",
        pais : "Mexico"
    }
}

// 1. Tienes el siguiente objeto persona
console.log(persona)

// 2. Extrae los valores de nombre, edad y ciudad usando destructuración
const { nombre, edad, direccion: { ciudad } } = persona

// 3. Muestra un mensaje formateado
console.log(`\nHola, me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`)


const productos = [
    {nombre: "laptop", precio: 1200},
    {nombre: "mouse", precio: 13000},
    {nombre: "teclado", precio: 500},
    {nombre: "monitor", precio: 2500},
    {nombre: "cable", precio: 50}
]


const productosCaros = productos
    .filter(producto => producto.precio > 1000)
    .map(producto => producto.nombre)

console.log("\nProductos con precio mayor a 1000:")
console.log(productosCaros)


const personas = [
    {nombre: "Laura", edad: 23},
    {nombre: "Artemio", edad: 21},
    {nombre: "Luis", edad: 28},
    {nombre: "Keren", edad: 17},
    {nombre: "Carlos", edad: 30}
]


const personaLuis = personas.find(persona => persona.nombre === "Luis")
console.log("\n1. Persona encontrada con .find():")
console.log(personaLuis)

console.log("\n2. Lista de personas con .forEach():")
personas.forEach(persona => {
    console.log(`${persona.nombre} tiene ${persona.edad} años`)
})

const edadTotal = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0)
console.log(`\n3. Suma total de edades con .reduce(): ${edadTotal} años`)
console.log(`Edad promedio: ${(edadTotal / personas.length).toFixed(2)} años`)