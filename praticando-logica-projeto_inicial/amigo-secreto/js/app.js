let amigos = [];
function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value.trim();
    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo);
    if (nomeAmigo === '' || nomeAmigo == nomeAmigo) {
        alert("Por favor, insira um nome válido.");
        return;
    }
    if (listaAmigos.textContent === '') {
        listaAmigos.textContent = nomeAmigo;
    } else {
        listaAmigos.textContent += ', ' + nomeAmigo;
    }
    document.getElementById('nome-amigo').value = '';
}
function sortear() {
    embaralhar(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < amigos.length; i++){

        if(i === amigos.length -1){
            listaSorteio.innerHTML += amigos[i] + '-->' + amigos [0] + '<br>';
        }else{
        listaSorteio.innerHTML += amigos[i] + '-->' + amigos [i + 1] + '<br>';
    }
}
}
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar (){
    amigos = [];
    document.getElementById('nome-amigo').value.trim().innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    return;
}