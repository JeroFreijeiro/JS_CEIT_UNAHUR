function personasConIniciales(personas, iniciales) {
    // Separamos las iniciales en nombre y apellido
    let [inicialNombre, inicialApellido] = iniciales.split('.');

    // Filtramos el array de personas
    return personas.filter(persona => {
        // Verificamos si la primera letra del nombre y del apellido coinciden con las iniciales
        return persona.nombre[0] === inicialNombre && persona.apellido[0] === inicialApellido;
    });
}

// Ejemplo de uso:
const personas = [
    {nombre: "Juan", apellido: "Pérez", edad: 35, direccion: "Calle Falsa 123"},
    {nombre: "Julian", apellido: "Perea", edad: 25, direccion: "Calle Falsa 345"},
    {nombre: "Mariana", apellido: "Pérez", edad: 17, direccion: "Calle Falsa 123"},
    {nombre: "Jeremias", apellido: "Cortéz", edad: 41, direccion: "Calle Falsa 999"},
    {nombre: "Jacinto", apellido: "Pinola", edad: 88, direccion: "Calle Falsa 456"}
];

const iniciales = 'J.P';

const resultado = personasConIniciales(personas, iniciales);
console.log(resultado);  // Salida esperada: Array con Juan Pérez, Julian Perea y Jacinto Pinola
