function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    if (botao.textContent === "Devolver") {
        if (confirm(`Tem certeza de que deseja devolver ${nomeJogo.innerHTML}?`)) {
            botao.textContent = "Alugar";
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
        }
    } else {
        botao.textContent = "Devolver";
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
    }
}
