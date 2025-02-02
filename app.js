// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombreAmigo);
    actualizarListaAmigos();
    inputAmigo.value = '';
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista antes de actualizar
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function actualizarListaAmigos() {
    // Obtener el elemento de la lista donde se mostrarán los amigos
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];  
        listaAmigos.appendChild(li); 
    }
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El amigo secreto es: ${amigoSorteado}!`;
}

