let operacao = prompt('Qual operação matematica você quer fazer? (multiplicacao/divisao/soma/subtracao)')
let numero1 = Number(prompt('Digite o primeiro número'))
let numero2 = Number(prompt('Digite o segundo número'))

switch (operacao) {

    case "multiplicacao":
        console.log(numero1 + "*" + numero2)
        console.log(numero1 * numero2)
        break;

    case "divisao":
        console.log(numero1 + "/" + numero2)
        console.log(numero1 / numero2)
        break;

    case "soma":
        console.log(numero1 + "+" + numero2)
        console.log(numero1 + numero2)
        break;

    case "subtracao":
        console.log(numero1 + "-" + numero2)
        console.log(numero1 - numero2)
        break;

    default:
        console.log('Você fez algo de errado')
        break;
}