
function calcularCustoViagem(distancia, eficiencia, precoGasolina, velocidadeMedia) {
    let tempoViagem = distancia / velocidadeMedia;
    let consumoCombustivel = distancia / eficiencia;
    let custoTotal = consumoCombustivel * precoGasolina;
    return custoTotal;
}