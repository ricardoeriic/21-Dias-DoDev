let nome = prompt('Insira o seu nome:')
let cpf = Number(prompt('Insira o seu CPF:'))
let valorTotal = 100
let qtdDeValoresInseridos = 0
let valoresSomados = 0
let maiorValor = 0
continuar = true

do {

    let querSacarOuDepositar = prompt('Você quer sacar ou depositar? (s/d)')
    let valor = Number(prompt("Insira o valor que quer movimentar (lembrando que o valor na sua conta é de R$100):"))
    valoresSomados += valor
    
    if(querSacarOuDepositar === "s" && valor <= valorTotal){
        valorTotal -= valor
    }else if(querSacarOuDepositar ==="s" && valor > valorTotal){
        console.log("Seu saldo é insuficiente")
    }else{
        valorTotal += valor
    }

    if(valor > maiorValor){
    maiorValor = valor
    }

    qtdDeValoresInseridos++

    
    let media = valoresSomados / qtdDeValoresInseridos

    console.log("O saldo total é: R$" + valorTotal)
    console.log("O maior valor inserido foi de: R$ " + maiorValor)
    console.log("A média dos valores inseridos foi de: R$ " + media)


    let querContinuar = prompt("Insira 1 para continuar e 2 para parar")

    if(querContinuar === "2"){
        continuar = false
    }

} while (continuar === true);

