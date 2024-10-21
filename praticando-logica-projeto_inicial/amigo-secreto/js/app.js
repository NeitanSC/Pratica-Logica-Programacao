let amigos = [];
function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value.trim();
    if (amigos.includes(nomeAmigo)) { //USAR INCLUDES PARA VERIFICAR SE UM DADO JÁ ESTÁ DENTRO DO ARRAY
        alert('Nome já acrescentado');
        return;
    }    
    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo);
    if (nomeAmigo == '') {
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
    if(amigos.length < 4){
        alert ('Adicione pelo menos 4 amigos');
        return;
    }
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