// Sistema de Cadastro de Peças

//Validações
//Listas de Peças:
var listaDePecas = ["Filtro do Ar", "Motor", "Amortecedor"];

// Quantidade de Peças no Cadastro (Limite de 10 peças):
if (listaDePecas.length < 10) {
    console.log("É possivel cadastra mais peças");
} else {
    console.log("Não tem mais espaço nessa lista, impossível cadastrar");
}

//Verificação do Peso (minimo 300g):
let peso = 100;

if (peso < 100) {
    console.log("A peça deve pesar no mínimo 100g");
} else {
    console.log("A peça possui peso adequado");
}

// Validação de Caracteres (minimo 3 caracteres)
let nomePeca = "Disco de freio";

if (nomePeca.length > 3) {
    console.log("O nome de peça está adequado para o cadastro!")
} else if (nomePeca.length == 0) {
     console.log("O nome da peça não pode ser vazio.")
} else {
    console.log("O nome de peça deve ter mais de 3 caracteres, digite um nome adequado.")
}

// Validação - Caracteres - Exemplo 2
switch (nomePeca.length) {
    case 0:
        console.log("O nome da peça não pode ser vazio.")
        break;
    
    case 1:
    case 2:
    case 3:
        console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado.")
        break;

    case 4:
        console.git("O nome possui 4 caracteres")
        break;

    default:
        console.log("O nome de peça está adequado para o cadastro!")
        break;
}