/*
Author: Alejandro Orozco Romo
Date: 08/06/2025
Project: Amigo Secreto 
version: 1.0
*/


// ********** VARIABLES ********** // 

let listaAmigos = [];


// ********** FUNCIONES ********** // 


// Esta funcion se ejecutara desde el archivo index.html
function agregarAmigo() {
    /*
    Función para agregar un nuevo amigo a la lista
    Se ejecuta cuando el usuario presiona el botón en el archivo index.h
    */

    // Capturamos el texto del input con id="amigo"
    // document.getElementById busca el campo del tecto por su ID
    // .value toma lo que escribio el usuario, y .trim() elimina los ecpacios antes y despues, por si se escriben solo espacios 
    let nombreAmigo = document.getElementById('amigo').value.trim();

    // Si el campo esta vacio, mostramos una mensaje y salimos con return;
    if (nombreAmigo == "") {

        alert("Por favor, inserte un nombre.");
        return;
    }

    // agregamos al arreglo los nombres agregados
    listaAmigos.push(nombreAmigo);

    // mostramos en consola 
    console.log(listaAmigos);

    // llamamos a la funcion limpiarCaja() para limpiar la caja de texto
    limpiarCaja();

    return;
}


function actualizarLista(){

    /*
    Funcion para mostrar en pantalla todos los amigos guardados
    */

    // obtenemos el elemente <u1>donde se mostrarán los amigos
    let listaHTML = document.getElementById("listaAmigos");

    // limpiamos la list antes de actualizar para evitar repeticiones
    listaHTML.innerHTML = "";

    // si el array esta vacio
    if (listaAmigos.length == ""){
        alert("No hay una lista de amigos para mostrar")
    } else {

        // recorre el array y agrega cada nombre como <li>
        for (let i = 0; i < listaAmigos.length; i++){
            let amigo = listaAmigos[i];

            // anadimos cada nuevo <li> al contenido del elemento
            listaHTML.innerHTML += `<li>${amigo}</li>`;
        }
    }

    return;
}


function sortearAmigo(){

    /**
    Funcion para elegir un nuevo amigo aleatorio y mostrarlo
    */

    // obtenemos el elemento donde mostraremos el resultado
    let listaHTML = document.getElementById("resultado");

    // Comprobamos que la lista de amigos no este vacia 
    if (listaAmigos.length === 0){
        alert("No tienes amigos para sortear, por favor, agrega");
    } else {

        // obtenemos el tamaño del array
        let tamañoLista = listaAmigos.length
        // generamos un indice aleatorio para mostrar un amigo
        let indiceAmigo = Math.floor(Math.random ()*tamañoLista);
        let amigod = listaAmigos[indiceAmigo];
        // mostramos el amigo sorteado en el elemento HTML
        listaHTML.innerHTML = `<li>${amigod}</li>`; 
        
    }
    return;
}


function limpiarCaja(){

    /*
    Funcion para limpiar la caja de texto
    */

    document.getElementById('amigo').value = '';

    return;
}


function nuevaLista(){

    /*
    Funcion para reiniciar el juego
    */

    // restablecer condiciones iniciales 
    listaAmigos = [];
    // limpiar lo mostrado
    document.getElementById("listaAmigos").innerHTML = ''; 

    return;
}