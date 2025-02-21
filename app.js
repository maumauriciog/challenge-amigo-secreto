//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomeAmigo = document.getElementById('amigo');
let arrayNomeAmigo = [];
let listaAmigos = document.getElementById('listaAmigos');

function adicionarAmigo(){
    console.log(nomeAmigo.value);
    arrayNomeAmigo.push(' ' + nomeAmigo.value);

    listaAmigos.innerHTML = arrayNomeAmigo;
    console.log(arrayNomeAmigo);

    nomeAmigo.value = '';
}