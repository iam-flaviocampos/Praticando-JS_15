/*
15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
*/


const revendedora = function (modelo){
    switch (modelo){
        case "Sedans":
        case "Motocicletas":
        case "Caminhonetes":
            console.log("Tem certeza que não prefere este modelo?")
            break
        case "Hatch":
            console.log("Compra efetudada com sucesso!")
            break
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui!")
    }
}

revendedora("Sedans")
revendedora("Motocicletas")
revendedora("Caminhonetes")
revendedora("Hatch")
revendedora("Trator")