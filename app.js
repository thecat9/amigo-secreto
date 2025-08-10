// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo desde el input
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Eliminar espacios al inicio y final

    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return; // Detener la función si está vacío
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = '';

    // Actualizar la lista en pantalla
    mostrarLista();
}

// Función para actualizar la lista de amigos en el HTML
function mostrarLista() {
    // Obtener el elemento <ul> donde se mostrarán los nombres
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista actual para evitar duplicados
    lista.innerHTML = '';

    // Recorrer el array de amigos y crear un <li> para cada uno
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto al azar
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Añade al menos uno para sortear.');
        return;
    }

    // Generar un índice aleatorio entre 0 y la longitud del array - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento <ul id="resultado">
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}
