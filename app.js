//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomeAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let erro = document.getElementById('erro');
let arrayAmigos = [];
let li = '';
let ul = '<ul>';
let indice = 0;
indice = parseInt(indice);
nomeAmigo.focus();

function adicionarAmigo() {
    if (nomeAmigo.value) {
        arrayAmigos.push(nomeAmigo.value);
        li = `<li>${arrayAmigos[indice]}</li>`;
        ul += li;
        listaAmigos.innerHTML = ul;
        nomeAmigo.value = '';
        indice += 1;
        nomeAmigo.focus();
        resultado.innerHTML = '';
        erro.innerHTML = '';
    } else {
        nomeAmigo.focus();
        listaAmigos.innerHTML = ul;
        resultado.innerHTML = '';
        erro.innerHTML = 'precisa inserir um amigo...';
    }
}

function sortearAmigo() {
    if (arrayAmigos.length >= 1) {
        nomeAmigo.focus();
        let amigoSorteado = arrayAmigos[Math.floor(Math.random() * arrayAmigos.length)];
        resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
        li = '';
        ul = '<ul></ul>';
        listaAmigos.innerHTML = ul;
        erro.innerHTML = '';
        arrayAmigos.length = 0;
        indice = 0;
    } else {
        nomeAmigo.focus();
        li = '';
        ul = '<ul></ul>';
        indice = 0;
        listaAmigos.innerHTML = '';
        resultado.innerHTML = ul;
        erro.innerHTML = 'não ha pessoas para o sorteio...'
    }
}