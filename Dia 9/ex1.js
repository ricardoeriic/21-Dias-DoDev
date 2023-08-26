continuar = true


while (continuar === true){

let nome = prompt("Qual o seu nome?")
let idade = Number(prompt("Qual a sua idade?"))
let peso = Number(prompt("Qual o seu peso?"))
let altura = Number(prompt("Qual a sua altura?"))
let profissao = prompt("Qual a sua profissão?")

console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissao + ", tem " + altura + "M de altura e pesa "+ peso + "kg")

if(idade >= 18){
    console.log("tá liberado tomar umas geladas")
}else{
    console.log("sem gelada pra você")
}

let idadeMeses = idade * 12
let idadeDias = idadeMeses * 30
let idadeSemanas =  idadeDias / 7


console.log("Sua idade em meses é de: " + idadeMeses + " meses")
console.log("Sua idade em semanas é de: " + idadeSemanas + " semanas")
console.log("Sua idade em dias é de: " + idadeDias + " dias")

let IMC = peso / (altura * altura)

console.log("Seu IMC é de " + IMC + " kg/m2")

if (IMC < 18,5){
    console.log("Você está na categoria: Magreza")
}else if (18,5 <= IMC < 24,9){
    console.log("Você está na categoria: Normal")
}else if (24,9 <= IMC < 30){
    console.log("Você está na categoria: Sobre Peso")
}else{
    console.log("Você está na categoria: Obeso")
}

let anoDeNascencia = 2023 - idade

console.log("Você nasceu no ano de: " + anoDeNascencia)

let idadeContagem = -1

for(anoDeNascencia === anoDeNascencia; anoDeNascencia <= 2023; anoDeNascencia++){
    idadeContagem = idadeContagem + 1
    console.log("Em " + anoDeNascencia + " você tinha: " + idadeContagem + " anos")

}


let querContinuar = prompt("Você quer continuar? (s/n")

if (querContinuar === "n")
    continuar = false

}