const fs= require('fs');
listaEstudiantes=[];

const crear=(estudiante)=>{
    listar();
    let est={
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    };
    let duplicado=listaEstudiantes.find(nom=> nom.nombre==estudiante.nombre)
    if(!duplicado){
        listaEstudiantes.push(est);
        console.log(listaEstudiantes);
        guardar();
    }
    else
        console.log('Ya existe otro estudiante con ese nombre ');
}


const listar=()=>{
    try{
        listaEstudiantes=require('./listado.json');
    }catch(error){
        listaEstudiantes=[];
    }
}


const guardar=()=>{
    let datos=JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json',datos,(err)=>{
        if(err)throw (err);
        console.log('Archivo creado con éxito');
    })
}


const mostrar=()=>{
    listar()
    console.log('Notas de los estudiantes');
    listaEstudiantes.forEach(estudiante=>{
        console.log(estudiante.nombre);
        console.log('notas');
        console.log('matematicas '+estudiante.matematicas);
        console.log('ingles '+estudiante.ingles);
        console.log('programacion '+estudiante.programacion+'\n');
    });
}

const mostrarest=(nom)=>{
    listar()
    let est=listaEstudiantes.find(buscar=> buscar.nombre==nom)
    if(!est){
        console.log('No existe este estudiante');
    }
    else{
        console.log(est.nombre);
        console.log('notas');
        console.log('matematicas '+est.matematicas);
        console.log('ingles '+est.ingles);
        console.log('programacion '+est.programacion+'\n');
    }
}
    
const mostrarmat=()=>{
    listar()
    let ganan= listaEstudiantes.filter(mat=>mat.matematicas>=3);
    if(ganan.length==0){
        console.log('Ningún estudiante va ganando');
    }
    else{
        ganan.forEach(estudiante=>{
            console.log(estudiante.nombre);
            console.log('notas');
            console.log('matematicas '+estudiante.matematicas+'\n');
        });
    }
}

const mostrarprom=(nom)=>{
    listar()
    let est=listaEstudiantes.find(buscar=> buscar.nombre==nom)
    if(!est){
        console.log('No existe este estudiante');
    }
    else{
        console.log(est.nombre);
        console.log('promedio');
        console.log((est.matematicas+est.ingles+est.programacion)/3+'\n');
    }
}

const mostrarpromalto=()=>{
    listar()
    let alto= listaEstudiantes.filter(todos=> (todos.matematicas+todos.ingles+todos.programacion)/3>=3);
    if(alto.length==0){
        console.log('Ningún estudiante tiene promedio alto');
    }
    else{
        alto.forEach(estudiante=>{
            console.log(estudiante.nombre);
            console.log('promedio');
            console.log((estudiante.matematicas+estudiante.ingles+estudiante.programacion)/3+'\n');
        });
    }
}

module.exports={
    crear,
    mostrar,
    mostrarest,
    mostrarmat,
    mostrarprom,
    mostrarpromalto
};