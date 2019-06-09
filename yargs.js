const nombre={
    demand:true,
    alias:'n'
}

const matematicas={
    demand:true,
    alias:'m'
}

const ingles={
    demand:true,
    alias:'i'
}

const programacion={
    demand:true,
    alias:'p'
}

const creacion={
    nombre,
    matematicas,
    ingles,
    programacion
}

const muestraest={
    nombre
}

const actualiza={
    nombre,
    asigntaura:{
        demand:true,
        alias:'a'
    },
    calificacion:{
        demand:true,
        alias:'c'
    }
}

const elimina={
    nombre
}

const muestraprom={
    nombre
}

const argv= require('yargs')
            .command('crear', 'Crear un estudiante en mi BD',creacion)
            .command('mostrar','Muestra los estudiantes y sus notas')
            .command('mostrarest', 'Muestra la informacion de un estudiante',muestraest)
            .command('mostrarprom', 'Muestra la informacion de un estudiante',muestraprom)
            .argv;

module.exports={
    argv
};