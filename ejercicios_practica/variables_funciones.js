
// 1. DECLARACIÓN DE VARIABLES (VAR, LET, CONST)


var marcasDepreciadas = ["Ford"];  // var: alcance global/función, se puede redeclarar
let contadorOperaciones = 0;       // let: alcance bloque, no se puede redeclarar
const marcasCoches = [             // const: alcance bloque, NO se puede reasignar
    { id: 1, nombre: "Toyota", país: "Japón", año: 1937 },
    { id: 2, nombre: "BMW", país: "Alemania", año: 1916 },
    { id: 3, nombre: "Ferrari", país: "Italia", año: 1947 }
];

// 2. FUNCIONES FLECHA + ASINCRONÍA


// Simular obtener datos de API (promesa)
const simularBD = (ms = 800) => new Promise((resolve) => {
    setTimeout(() => resolve("Operación completada"), ms);
});


// 3. CRUD - CREATE (Crear)


const crearMarca = async (nuevaMarca) => {
    try {
        console.log("Creando nueva marca...");
        await simularBD();
        
        // Desestructuración: obtener el id mayor
        const { id: ultimoId = 0 } = marcasCoches.at(-1) || {};
        
        const marca = {
            id: ultimoId + 1,
            ...nuevaMarca  // Spread operator (expansión)
        };
        
        marcasCoches.push(marca);
        contadorOperaciones++;
        
        console.log(`Marca creada:`, marca);
        return marca;
    } catch (error) {
        console.error("Error al crear:", error);
    }
};


// 4. CRUD - READ (Leer)


const obtenerTodasLasMarcas = async () => {
    try {
        console.log("Obteniendo todas las marcas...");
        await simularBD();
        contadorOperaciones++;
        return marcasCoches;
    } catch (error) {
        console.error("Error al obtener:", error);
    }
};

// Leer una marca por ID
const obtenerMarcaPorId = async (id) => {
    try {
        console.log(`Buscando marca con ID ${id}...`);
        await simularBD(500);
        
        // find() + desestructuración
        const marca = marcasCoches.find(m => m.id === id);
        contadorOperaciones++;
        
        if (!marca) {
            throw new Error(`Marca con ID ${id} no encontrada`);
        }
        return marca;
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Buscar por criterio (map, filter)
const buscarMarcasPorPais = async (país) => {
    try {
        console.log(`Buscando marcas de ${país}...`);
        await simularBD();
        
        // filter() - retorna array
        const resultados = marcasCoches.filter(m => m.país.toLowerCase() === país.toLowerCase());
        contadorOperaciones++;
        
        return resultados.length > 0 ? resultados : `No hay marcas de ${país}`;
    } catch (error) {
        console.error("Error:", error);
    }
};


// 5. CRUD - UPDATE (Actualizar)

const actualizarMarca = async (id, datosActualizados) => {
    try {
        console.log(`Actualizando marca ${id}...`);
        await simularBD();
        
        // Desestructuración + findIndex
        const indice = marcasCoches.findIndex(m => m.id === id);
        
        if (indice === -1) {
            throw new Error(`Marca con ID ${id} no encontrada`);
        }
        
        // Spread para combinar datos
        marcasCoches[indice] = {
            ...marcasCoches[indice],
            ...datosActualizados
        };
        
        contadorOperaciones++;
        console.log(`Marca actualizada:`, marcasCoches[indice]);
        
        return marcasCoches[indice];
    } catch (error) {
        console.error("Error al actualizar:", error.message);
    }
};


// 6. CRUD - DELETE (Eliminar)


const eliminarMarca = async (id) => {
    try {
        console.log(`Eliminando marca ${id}...`);
        await simularBD(600);
        
        // Desestructuración de índice
        const { length: longitudAnterior } = marcasCoches;
        
        // filter() crea nuevo array sin el elemento
        const marcaAEliminar = marcasCoches.find(m => m.id === id);
        
        if (!marcaAEliminar) {
            throw new Error(`Marca con ID ${id} no encontrada`);
        }
        
        // Opción 1: filter
        // marcasCoches.length = 0;
        // marcasCoches.push(...marcasCoches.filter(m => m.id !== id));
        
        // Opción 2: splice (modifica el array original)
        const indiceBuscado = marcasCoches.findIndex(m => m.id === id);
        marcasCoches.splice(indiceBuscado, 1);
        
        contadorOperaciones++;
        console.log(`Marca eliminada:`, marcaAEliminar);
        console.log(`Marcas restantes: ${marcasCoches.length}`);
        
        return true;
    } catch (error) {
        console.error("Error al eliminar:", error.message);
    }
};


// 7. MÉTODOS DE ARRAY ÚTILES


// map() - transformar array
const obtenerNombresMarcas = async () => {
    console.log("Obteniendo solo nombres...");
    await simularBD(400);
    
    // Desestructuración en map
    const nombres = marcasCoches.map(({ nombre }) => nombre);
    contadorOperaciones++;
    
    return nombres;
};

// reduce() - agregar información
const obtenerEstadisticas = async () => {
    console.log("Calculando estadísticas...");
    await simularBD(500);
    
    // Desestructuración completa
    const stats = marcasCoches.reduce((acc, { año, país }) => {
        return {
            totalMarcas: acc.totalMarcas + 1,
            marcasMasAntigua: Math.min(acc.marcasMasAntigua, año),
            países: [...new Set([...acc.países, país])]
        };
    }, { 
        totalMarcas: 0, 
        marcasMasAntigua: Infinity, 
        países: [] 
    });
    
    contadorOperaciones++;
    return stats;
};

// some() y every()
const existeMarcaAntigua = () => {
    // some() - retorna true si al menos uno cumple
    return marcasCoches.some(({ año }) => año < 1920);
};

const todasSonJaponesas = () => {
    // every() - retorna true si todos cumplen
    return marcasCoches.every(({ país }) => país === "Japón");
};

// sort() y reverse()
const marcasOrdenadas = async () => {
    console.log("Ordenando marcas...");
    await simularBD(400);
    
    // Desestructuración para copiar y no mutar original
    const [...copia] = marcasCoches;
    
    // sort por año (mayor a menor)
    const ordenadas = copia.sort((a, b) => b.año - a.año);
    contadorOperaciones++;
    
    return ordenadas;
};


// 8. PROMESAS AVANZADAS CON ARRAYS

// Promise.all() - ejecutar múltiples operaciones
const operacionesMultiples = async () => {
    console.log("\nEjecutando operaciones en paralelo...");
    
    try {
        const [todas, nombres, stats] = await Promise.all([
            obtenerTodasLasMarcas(),
            obtenerNombresMarcas(),
            obtenerEstadisticas()
        ]);
        
        console.log("Resultados paralelos obtenidos");
        return { todas, nombres, stats };
    } catch (error) {
        console.error("Error en operaciones paralelas:", error);
    }
};

// Promise.race() - primera que termine
const primerResultado = async () => {
    const promesas = [
        simularBD(1000).then(() => "Operación 1"),
        simularBD(500).then(() => "Operación 2"),
        simularBD(1500).then(() => "Operación 3")
    ];
    
    const resultado = await Promise.race(promesas);
    return resultado;
};


// 9. FUNCIÓN HELPER - Imprimir estado actual


const mostrarEstado = async () => {
    console.log("\n" + "=".repeat(50));
    console.log("ESTADO ACTUAL DEL SISTEMA");
    console.log("=".repeat(50));
    
    console.log(`\nTotal de marcas: ${marcasCoches.length}`);
    console.log(`Operaciones realizadas: ${contadorOperaciones}`);
    console.log("\nLista actual:");
    
    // Desestructuración en forEach
    marcasCoches.forEach(({ id, nombre, país, año }) => {
        console.log(`   [${id}] ${nombre} (${país}, ${año})`);
    });
    
    console.log("\n" + "=".repeat(50) + "\n");
};

// 10. EJEMPLO DE USO - EJECUTAR PRUEBAS


const ejecutarPruebas = async () => {
    try {
        // Mostrar inicial
        await mostrarEstado();
        
        // CREATE
        await crearMarca({ nombre: "Tesla", país: "USA", año: 2003 });
        await crearMarca({ nombre: "Lamborghini", país: "Italia", año: 1963 });
        
        // READ
        await obtenerTodasLasMarcas();
        await obtenerMarcaPorId(1);
        
        // Búsqueda
        const marcasItalia = await buscarMarcasPorPais("Italia");
        console.log("Marcas de Italia:", marcasItalia);
        
        // UPDATE
        await actualizarMarca(1, { país: "Japón" });
        
        // DELETE
        await eliminarMarca(2);
        
        // Métodos de array
        console.log("\nSolo nombres:", await obtenerNombresMarcas());
        console.log("Estadísticas:", await obtenerEstadisticas());
        console.log("Marca antigua existe:", existeMarcaAntigua());
        console.log("Todas son japonesas:", todasSonJaponesas());
        console.log("Ordenadas por año:", await marcasOrdenadas());
        
        // Promesas en paralelo
        await operacionesMultiples();
        
        // Estado final
        await mostrarEstado();
        
    } catch (error) {
        console.error("Error durante las pruebas:", error);
    }
};

