let confirmar = "n"

while(confirmar === "n"){

let nome = prompt("Insira o seu nome")
console.log(nome)
let idade = Number(prompt("Insira a sua idade"))
console.log(idade)
let salarioAtual = Number(prompt("Insira o seu salário atual"))
console.log(salarioAtual)

let digitouCerto = prompt("As informações estão corretas? (s/n)")

if(digitouCerto === "s"){
    console.log ("Vamos continuar")
    confirmar = "s"
}else{
    console.log("Escreva novamente!")
}

let anosDeAumento = 2024
let aumentoSalario = 0.015

for(anosDeAumento = 2024; anosDeAumento <=2034; anosDeAumento++){
    
    let salarioDoAno = salarioAtual * (1 + aumentoSalario)
    console.log("No ano de " + anosDeAumento + " seu salário passará a ser: R$" + salarioDoAno )
    aumentoSalario = aumentoSalario * 2
    salarioAtual = salarioDoAno
}


}



