// Corrija as tipagens sem usar 'any'


interface User {
    nome: string;
    idade: number;
    ativo: boolean;
};


let user: User = {
    nome: 'Lucas',
    idade: 19,
    ativo: true
}

// Escreva uma função que receba esses dados e retorne uma frase:
function gerarMensagem(user:User): string {
  return `Usuário ${user.nome} tem ${user.idade} anos e está ${user.ativo ? "ativo" : "inativo"}`;
}

console.log (gerarMensagem(user));

