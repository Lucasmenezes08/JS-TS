/*
Simular um pequeno sistema de cadastro de produtos, onde cada produto possui informações específicas 
e você precisa manipular um array de objetos com tipagem explícita.
*/

interface Produto {
    nome: string;
    preco: number;
    disponivel: boolean;
}

let estoque: Produto[] = [
    {nome: 'Madeira' , preco: 10 , disponivel: true},
    {nome: 'pedra' , preco: 10 , disponivel: false},
    {nome: 'tesoura' , preco: 10 , disponivel: false}
];


function listarDisponiveis (estoque:Produto[]):string[] {
   const produtos:string[] = estoque.filter(produto => produto.disponivel).map(produto => produto.nome);
   return produtos;
}

console.log (listarDisponiveis(estoque));


