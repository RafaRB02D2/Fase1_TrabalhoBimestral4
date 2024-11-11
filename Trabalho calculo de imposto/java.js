// function obterNumero(promptText) {
//     let valor = parseFloat(prompt(promptText));
//     while (isNaN(valor) || valor < 0) {
//         alert("Por favor, insira um valor numérico válido.");
//         valor = parseFloat(prompt(promptText));
//     }
//     return valor;
// }

// let Preco_Garrafa = obterNumero("Digite o preço da garrafa:");
// let Preco_tampa = obterNumero("Digite o preço da tampa:");
// let Preco_Rotulo = obterNumero("Digite o preço do rótulo:");
// let Preco_Lacre = obterNumero("Digite o preço do lácre:");
// let Preco_Cola = obterNumero("Digite o preço da cola:");
// let Gastos_diversos = obterNumero("Digite outros gastos:");
// let Mao_de_obra = obterNumero("Digite o quanto você gasta de mão de obra:");
// let irpj = obterNumero("Digite a quantidade de impostos que você paga:");
// let lucro = obterNumero("Digite em porcentagem quanto você quer de lucro:");



let valor_produto = Preco_Cola + Preco_Garrafa + Preco_Lacre + Preco_Rotulo + Preco_tampa + Gastos_diversos + Mao_de_obra;

let impostos = irpj + lucro;
let valor_do_impostos = (100 - impostos) / 100;

let Preco_de_venda = valor_produto / valor_do_impostos;

alert("O preço de venda deve ser: " + Preco_de_venda.toFixed(2));