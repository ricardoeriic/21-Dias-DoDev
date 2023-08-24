let continuar = true
let mediaGeral = 0
let somaNotas = 0
let qtdNotas = 0
let homensEnviaramNotas = 0
let mulheresAcimaDe7 = 0
let maiorNotaHomens = 0

while (continuar === true){

    let nota = Number(prompt('Insira a nota do aluno'))
    let sexo = prompt('Insira o sexo do aluno (h/m)')

    somaNotas = somaNotas + nota
    qtdNotas = qtdNotas + 1

    if(sexo === "h")
        homensEnviaramNotas = homensEnviaramNotas + 1


    if(nota > 7 && sexo === "m")
        mulheresAcimaDe7 = mulheresAcimaDe7 + 1

    
    if(nota > maiorNotaHomens || sexo === "h")
    maiorNotaHomens = nota

    let desejaContinuar = prompt("Você deseja cadastrar outra nota? (s/n)")

    if(desejaContinuar === 'n')
        continuar = false

    }

    mediaGeral = somaNotas / qtdNotas

mediaGeral = somaNotas / qtdNotas

console.log("Média geral: " + mediaGeral)
console.log("Quantidade de Homens que enviaram as notas: " + homensEnviaramNotas)
console.log("Quanditade de mulheres que tiraram acima de 7: " + mulheresAcimaDe7)
console.log("Maior nota dos Homens = " + maiorNotaHomens)