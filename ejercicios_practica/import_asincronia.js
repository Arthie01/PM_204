// 1.Crea una función verificarUsuario(usuario) que retorne una promesa.
//2. Si el nombre de usuario es "admin", la promesa se resuelve con "Acceso concedido", si no,
//se rechaza con "Acceso denegado".

function verificarUsuario(usuario){
    return new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Acceso concedido")
        } else {
            reject("Acceso denegado")
        }
    })
}

verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.log(err))

verificarUsuario("artemio")
    .then(res => console.log(res))
    .catch(err => console.log(err))


function simularPeticionAPI(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos(){
    try {
        console.log("Esperando datos de la API...");
        const resultado = await simularPeticionAPI();
        console.log(resultado);
    } catch (error) {
        console.log("Error al obtener datos:", error);
    }
}

obtenerDatos();


//Destructuracion de datos