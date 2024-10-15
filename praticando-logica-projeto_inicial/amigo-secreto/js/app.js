function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value.trim();
    let listaAmigos = document.getElementById('lista-amigos');

    if (nomeAmigo === '') {
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

}
function reiniciar (){

}