console.log("Hola mundo JS desde el servidor")

/*Promedio 2 variables*/
let edad1 = 11
let edad2 = 33
console.log("Edad promedio: ")
console.log((edad1 + edad2)/2)

/*Medir tiempo de procesos*/
console.time("miProceso")

    for(let i = 0; i < 10; i++){
    }

console.timeEnd("miProceso")

/* Objetos tipo tabla*/
let usuarios = [
    {nombre: "Artemio", edad: "21"},
    {nombre: "Keren", edad: "17"}
]

console.table(usuarios)