function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);


    if (isNaN(qtd) || qtd <= 0) {
        alert("Por favor, insira uma quantidade válida de ingressos.");
        return;
    }

    let tipoElemento = document.getElementById(`qtd-${tipo}`);
    let qtdDisponivel = parseInt(tipoElemento.textContent);

    if (qtd > qtdDisponivel) {
        alert(`Quantidade indisponível para tipo ${tipo}`);
    } else {
        qtdDisponivel -= qtd;
        tipoElemento.textContent = qtdDisponivel;
        alert(`Você comprou ${qtd} ingressos do tipo ${tipo}`);
    }
}




// LITERALMENTE O CÓDIGO SIMPLIFICADO
// function comprar() {
//     let tipo = document.getElementById('tipo-ingresso').value;
//     let qtd = parseInt(document.getElementById('qtd').value);
//     let tipoElemento = document.getElementById(`qtd-${tipo}`);
//     let qtdDisponivel = parseInt(tipoElemento.textContent);

//     if (qtd > qtdDisponivel) {
//         alert(`Quantidade indisponível para tipo ${tipo}`);
//     } else {
//         qtdDisponivel -= qtd;
//         tipoElemento.textContent = qtdDisponivel;
//         alert(`Você comprou ${qtd} ingressos do tipo ${tipo}`);
//     }
// }

// CÓDIGO MAIS EXTENSO QUE FAZ A MESMA COISA 
//     if (tipo.value == 'pista'){
//         comprarPista(qtd);
//     }else if (tipo.value == 'superior'){
//         comprarSuperior(qtd);
//     }else {
//         comprarInferior(qtd);
//     }
// }
// function comprarPista(qtd){
//     let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
//     let tipo = document.getElementById('tipo-ingresso').value;
//     if (qtd > qtdPista){
//         alert(`Quantidade indisponivel para tipo ${tipo}`)
//     }else{
//         qtdPista -= qtd;
//         document.getElementById('qtd-pista').textContent = qtdPista;
//         alert(`Você comprou ${qtd} ingressos do tipo ${tipo}`);
//     }
// }
// function comprarSuperior(qtd){
//     let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
//     let tipo = document.getElementById('tipo-ingresso').value;
//     if (qtd > qtdSuperior){
//         alert(`Quantidade indisponivel para tipo ${tipo}`)
//     }else{
//         qtdSuperior -= qtd;
//         document.getElementById('qtd-superior').textContent = qtdSuperior;
//         alert(`Você comprou ${qtd} ingressos do tipo ${tipo}`);
//     }
// }
// function comprarInferior(qtd){
//     let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
//     let tipo = document.getElementById('tipo-ingresso').value;
//     if (qtd > qtdInferior){
//         alert(`Quantidade indisponivel para tipo ${tipo}`)
//     }else{
//         qtdInferior -= qtd;
//         document.getElementById('qtd-inferior').textContent = qtdInferior;
//         alert(`Você comprou ${qtd} ingressos do tipo ${tipo}`);
//     }
// }