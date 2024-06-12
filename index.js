import entradaDados from 'readline-sync'

let divida = entradaDados.question("Informe o valor devido: ")

let taxa_juros = undefined

if (divida <= 0){
    console.log("Valor menor que 0. Digite um valor maior")
}
else {
    let dias_divida = parseInt(entradaDados.question("Informe quantos dias se passaram desde o dia do vencimento do boleto: "))
   
if (dias_divida <=0) {
        console.log("Valor invalido!!!!")
    }


else if (dias_divida >= 16 ){
    let taxa_juros = 10/100
    let juros = divida * taxa_juros
    console.log("taxa de juros 10%")
    console.log("Valor total com juros: " + (Number(juros) + Number(divida)))

}

else {
    let taxa_juros = 5/100
    let juros = divida * taxa_juros
    console.log("Valor original: " + divida)
    console.log("Dias atrasados: " + dias_divida)
    console.log("taxa de juros 5%")
    console.log("Valor total com juros: " + (Number(juros) + Number(divida)))
}


}