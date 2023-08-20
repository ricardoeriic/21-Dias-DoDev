let nome = prompt("Insira o seu Nome")
let idade = prompt("Insira a sua Idade")
let idadeNum = Number(idade)
let altura = prompt(" Insira a sua Altura")
let alturaNum = Number(altura)
let peso = prompt("Insira o seu Peso")
let pesoNum = Number(peso)

anoDeNascimento = (2023 - idadeNum)

IMC = peso / (altura * altura)

console.log("Olá " + nome + ", você tem " + idadeNum + " anos, nasceu em " + anoDeNascimento + ", tem " + alturaNum + " de altura, pesa " + pesoNum + "kg seu IMC é " + IMC + " Kg/m2")

