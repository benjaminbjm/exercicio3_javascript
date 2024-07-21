// Modelo de Objeto para Pessoa
class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = parseInt(idade); // Convertendo a idade para número
    }
}

// Função para obter dados do usuário
function obterDadosUsuario() {
    const nome = prompt("Digite seu nome:");
    const sobrenome = prompt("Digite seu sobrenome:");
    const idade = prompt("Digite sua idade:");
    return new Pessoa(nome, sobrenome, idade);
}

// Função para comparar idades
function compararIdades(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        return `${pessoa1.nome} ${pessoa1.sobrenome} é mais velho(a) que ${pessoa2.nome} ${pessoa2.sobrenome}`;
    } else if (pessoa1.idade < pessoa2.idade) {
        return `${pessoa2.nome} ${pessoa2.sobrenome} é mais velho(a) que ${pessoa1.nome} ${pessoa1.sobrenome}`;
    } else {
        return `${pessoa1.nome} ${pessoa1.sobrenome} e ${pessoa2.nome} ${pessoa2.sobrenome} têm a mesma idade`;
    }
}

// Função principal para gerenciar os registros e comparações
function gerenciarRegistros() {
    const pessoas = [];
    let continuar = true;

    while (continuar) {
        const novaPessoa = obterDadosUsuario();
        pessoas.push(novaPessoa);

        continuar = confirm("Deseja adicionar outro registro?");
    }

    // Realizar comparações entre todas as pessoas registradas
    for (let i = 0; i < pessoas.length; i++) {
        for (let j = i + 1; j < pessoas.length; j++) {
            console.log(compararIdades(pessoas[i], pessoas[j]));
        }
    }
}

// Executar a função principal
gerenciarRegistros();