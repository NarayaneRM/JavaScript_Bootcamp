//Faça um programa para calcular o valor gasto de combustível
//em uma viagem.
//Você terá 3 variáveis. Sendo elas:
// 1. Preço do combustível;
// 2. Gasto médio de combustível do carro por KM;
// 3. Distância em KM da viagem;
//Imprima no console o valor que será gasto de combustível para realizar esta viagem


let preco = 5.79;
let KmPorLitro = 12;
let DistanciaEmKm = 1580;

console.log((preco*(DistanciaEmKm/KmPorLitro)).toFixed(2));
//<variavel>.toFixed(n) significa um doble arredondado até à n-ésima casa