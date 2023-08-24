for(let contadorUm = 0; contadorUm < 10; contadorUm++){
    console.log("O index do primeiro FOR é: " + contadorUm)
    for(let contadorDois = 0; contadorDois < 10; contadorDois++){
        console.log("O index do segundo FOR é: " + contadorDois)
    }
}








let tabuada = Number(prompt("Insira o número da tabuada que deseja, te devolverei ela e as próximas duas"))

console.log("Aqui está a tabuada do " + tabuada)

let tabuadaFinal = tabuada + 15;
//tabuada = 5
for (let contadorTabuada = tabuada; contadorTabuada <= tabuadaFinal ; contadorTabuada++) {
    for(let contador = 0; contador <= 10; contador++){
        console.log(contadorTabuada + ' x ' + contador + " = " + contadorTabuada*contador)
    }
}
