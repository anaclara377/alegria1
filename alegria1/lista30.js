ex01

//let idade = 17;

//if (idade >= 18) {
//     console.log("Maior de idade");
// } else {
//     console.log("Menor de idade");
// }

ex02

// let numero = -8;

// if (numero > 0) {
//     console.log("Número positivo");
// } else if (numero < 0) {
//     console.log("Número negativo");
// } else {
//     console.log("O número é zero");
// }
 
ex03

// let numero = 23;

// if (numero % 2 === 0) {
//     console.log(`${numero} é par`);
// } else {
//     console.log(`${numero} é ímpar`);
// }

ex04

let a = 35;
let b = 42;

if (a > b) {
    console.log(`${a} é maior que ${b}`);
} else if (a < b) {
    console.log(`${b} é maior que ${a}`);
} else {
    console.log("Os dois números são iguais");
}


ex05

// let idade = 20;
// let ingressoValido = true;

// if (idade >= 18 && ingressoValido) {
//     console.log("Entrada autorizada");
// } else {
//     console.log("Entrada negada");
// }


ex06

// let valorCompra = 150;
// let clienteVIP = true;
// let desconto = 0;
// let valorFinal = valorCompra;

// if (valorCompra >= 200 || clienteVIP) {
//     desconto = valorCompra * 0.20;
//     valorFinal = valorCompra - desconto;
// }

// console.log(`Valor original: R$ ${valorCompra.toFixed(2)}`);
// console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
// console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);


ex07

// let temperatura = 85;

// if (temperatura < 40) {
//     console.log("Baixa");
// } else if (temperatura <= 80) {
//     console.log("Normal");
// } else {
//     console.log("Superaquecimento");
// }



ex08

// let nota = 8;
// let frequencia = 80;

// if (nota >= 7 && frequencia >= 75) {
//     console.log("Aprovado");
// } else {
//     console.log("Reprovado");
// }


ex09

// let idade = 17;

// if (idade < 0) {
//     console.log("Idade inválida");
// } else if (idade <= 12) {
//     console.log("Criança");
// } else if (idade <= 17) {
//     console.log("Adolescente");
// } else if (idade <= 59) {
//     console.log("Adulto");
// } else {
//     console.log("Idoso");
// }


ex10

// let horario = 19;
// let autorizado = true;

// if (autorizado && horario >= 8 && horario <= 18) {
//     console.log("Acesso permitido");
// } else {
//     console.log("Acesso negado");
// }


ex11

// let renda = 4500;
// let possuiRestricao = false;

// if (renda >= 3000 && !possuiRestricao) {
//     console.log("Empréstimo aprovado");
// } else {
//     console.log("Empréstimo negado");
// }


ex12

// let totalCompra = 180;
// let cupomFrete = true;
// let frete = 25;

// if (totalCompra >= 250 || cupomFrete) {
//     frete = 0;
// }

// let totalPagar = totalCompra + frete;

// console.log(`Valor da compra: R$ ${totalCompra.toFixed(2)}`);
// console.log(`Valor do frete: R$ ${frete.toFixed(2)}`);
// console.log(`Total a pagar: R$ ${totalPagar.toFixed(2)}`);


ex13

// let pontos = 750;

// if (pontos < 100) {
//     console.log("Iniciante");
// } else if (pontos < 500) {
//     console.log("Bronze");
// } else if (pontos < 1000) {
//     console.log("Prata");
// } else {
//     console.log("Ouro");

// }

ex14

// let usuario = "aluno";
// let senha = "senai123";

// if (usuario === "aluno" && senha === "senai123") {
//     console.log("Acesso liberado");
// } else {
//     console.log("Usuário ou senha incorretos");
// }


ex15

// let cor = "amarelo";

// if (cor === "verde") {
//     console.log("Siga");
// } else if (cor === "amarelo") {
//     console.log("Atenção");
// } else if (cor === "vermelho") {
//     console.log("Pare");
// } else {
//     console.log("Cor inválida");
// }


ex16

// let dia = 6;

// if (dia < 1 || dia > 7) {
//     console.log("Dia inválido");
// } else if (dia <= 5) {
//     console.log("Dia útil");
// } else {
//     console.log("Fim de semana");
// }


ex17

// let dia = 6;

// if (dia < 1 || dia > 7) {
//     console.log("Dia inválido");
// } else if (dia <= 5) {
//     console.log("Dia útil");
// } else {
//     console.log("Fim de semana");
// }


ex18

// let estoque = 4;
// let quantidadePedida = 6;

// if (quantidadePedida <= 0) {
//     console.log("Pedido inválido: quantidade deve ser positiva");
// } else if (quantidadePedida > estoque) {
//     console.log("Venda não autorizada: estoque insuficiente");
// } else {
//     estoque = estoque - quantidadePedida;
//     console.log("Venda autorizada");
//     console.log(`Estoque restante: ${estoque}`);
// }


ex19

// let nota = 5.8;
// let frequencia = 82;

// if (frequencia < 75) {
//     console.log("Reprovado por frequência");
// } else if (nota >= 7) {
//     console.log("Aprovado");
// } else if (nota >= 5) {
//     console.log("Recuperação");
// } else {
//     console.log("Reprovado por nota");
// }


ex20

// let valorCompra = 380;
// let percentual = 0;

// if (valorCompra < 100) {
//     percentual = 0;
// } else if (valorCompra < 300) {
//     percentual = 0.05;
// } else if (valorCompra < 500) {
//     percentual = 0.10;
// } else {
//     percentual = 0.15;
// }

// let desconto = valorCompra * percentual;
// let totalFinal = valorCompra - desconto;

// console.log(`Valor da compra: R$ ${valorCompra.toFixed(2)}`);
// console.log(`Percentual de desconto: ${percentual * 100}%`);
// console.log(`Valor do desconto: R$ ${desconto.toFixed(2)}`);
// console.log(`Total com desconto: R$ ${totalFinal.toFixed(2)}`);


ex21

// let ladoA = 3;
// let ladoB = 4;
// let ladoC = 5;

// if (
//     ladoA > 0 &&
//     ladoB > 0 &&
//     ladoC > 0 &&
//     ladoA + ladoB > ladoC &&
//     ladoA + ladoC > ladoB &&
//     ladoB + ladoC > ladoA
// ) {
//     console.log("Os lados formam um triângulo");
// } else {
//     console.log("Os lados não formam um triângulo");
// }

ex22

// let ladoA = 6;
// let ladoB = 6;
// let ladoC = 4;

// // Primeiro, verificamos se o triângulo é válido.
// if (
//     ladoA > 0 &&
//     ladoB > 0 &&
//     ladoC > 0 &&
//     ladoA + ladoB > ladoC &&
//     ladoA + ladoC > ladoB &&
//     ladoB + ladoC > ladoA
// ) {
//     // Depois, classificamos o tipo de triângulo.
//     if (ladoA === ladoB && ladoB === ladoC) {
//         console.log("Triângulo equilátero");
//     } else if (
//         ladoA === ladoB ||
//         ladoA === ladoC ||
//         ladoB === ladoC
//     ) {
//         console.log("Triângulo isósceles");
//     } else {
//         console.log("Triângulo escaleno");
//     }
// } else {
//     console.log("Os lados não formam um triângulo válido");
// }

ex23

// let peso = 72;
// let altura = 1.75;

// if (peso <= 0 || altura <= 0) {
//     console.log("Erro: peso e altura devem ser positivos");
// } else {
//     let imc = peso / (altura ** 2);

//     console.log(`Seu IMC é: ${imc.toFixed(2)}`);

//     if (imc < 18.5) {
//         console.log("Abaixo do peso");
//     } else if (imc < 25) {
//         console.log("Faixa considerada normal");
//     } else if (imc < 30) {
//         console.log("Sobrepeso");
//     } else {
//         console.log("Obesidade");
//     }
// }




ex24

// let horas = 5;
// let clienteConveniado = true;
// let valor = 0;

// if (horas <= 0) {
//     console.log("Quantidade de horas inválida");
// } else {
//     if (horas <= 2) {
//         valor = 10;
//     } else {
//         valor = 10 + (horas - 2) * 4;
//     }

//     // Conveniados recebem 20% de desconto.
//     if (clienteConveniado === true) {
//         valor = valor * 0.80;
//     }

//     console.log(`Valor do estacionamento: R$ ${valor.toFixed(2)}`);
// }


ex25


// let velocidade = 92;
// let limite = 80;

// if (velocidade <= limite) {
//     console.log("Dentro do limite");
// } else if (velocidade <= limite * 1.20) {
//     console.log("Acima do limite");
// } else {
//     console.log("Muito acima do limite");
// }


ex26

// let media = 9.1;
// let frequencia = 92;
// let rendaFamiliar = 2400;

// if (
//     media >= 9 &&
//     frequencia >= 90 &&
//     rendaFamiliar <= 2500
// ) {
//     console.log("Bolsa integral");
// } else if (
//     media >= 7 &&
//     frequencia >= 75 &&
//     rendaFamiliar <= 4000
// ) {
//     console.log("Bolsa parcial");
// } else {
//     console.log("Sem bolsa");
// }


ex27

// let usuario = "admin";
// let senha = "1234";
// let tentativas = 2;

// if (tentativas >= 3) {
//     console.log("Conta bloqueada");
// } else if (usuario === "admin" && senha === "1234") {
//     console.log("Login realizado com sucesso");
// } else {
//     console.log("Credenciais inválidas");
// }

ex28

// let consumoKWh = 250;
// let tarifa = 0;

// if (consumoKWh < 0) {
//     console.log("Erro: o consumo não pode ser negativo");
// } else {
//     if (consumoKWh <= 100) {
//         tarifa = 0.60;
//     } else if (consumoKWh <= 200) {
//         tarifa = 0.75;
//     } else {
//         tarifa = 0.90;
//     }

//     // A tarifa escolhida é aplicada sobre todo o consumo.
//     let conta = consumoKWh * tarifa;

//     console.log(`Consumo: ${consumoKWh} kWh`);
//     console.log(`Tarifa: R$ ${tarifa.toFixed(2)} por kWh`);
//     console.log(`Valor da conta: R$ ${conta.toFixed(2)}`);
// }

ex29

// let estoque = 12;
// let quantidade = 3;
// let precoUnitario = 80;
// let saldoCliente = 220;
// let clienteVIP = false;

// let subtotal = quantidade * precoUnitario;
// let valorFinal = subtotal;

// // VIP recebe 10% de desconto antes de verificar o saldo.
// if (clienteVIP === true) {
//     valorFinal = subtotal * 0.90;
// }

// console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
// console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);

// if (quantidade <= 0) {
//     console.log("Compra recusada: quantidade inválida");
// } else if (quantidade > estoque) {
//     console.log("Compra recusada: estoque insuficiente");
// } else if (saldoCliente < valorFinal) {
//     console.log("Compra recusada: saldo insuficiente");
// } else {
//     estoque = estoque - quantidade;

//     console.log("Compra autorizada");
//     console.log(`Saldo restante: R$ ${(saldoCliente - valorFinal).toFixed(2)}`);
//     console.log(`Estoque restante: ${estoque}`);
// }


ex30

// let idade = 17;
// let notaProva = 82;
// let frequencia = 88;
// let autorizacaoResponsavel = true;
// let possuiPendencia = false;

// // Todas as regras precisam ser atendidas.
// if (
//     idade >= 14 &&
//     idade <= 20 &&
//     notaProva >= 70 &&
//     frequencia >= 80 &&
//     !possuiPendencia &&
//     (idade >= 18 || autorizacaoResponsavel)
// ) {
//     console.log("Inscrição aprovada");
// } else {
//     console.log("Inscrição recusada");
// }

