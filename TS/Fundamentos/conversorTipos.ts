// Conversão de dados brutos em objeto tipado

const dadosBrutos:DadosBrutosusuario = {
  nome_completo: "Lucas Menezes",
  idade: 25,
  ativo: "sim" 
};


interface DadosBrutosusuario {
    nome_completo: string;
    idade: number;
    ativo: 'sim' | 'não';
}

interface Usuario {
    nome: string;
    idade: number;
    ativo: boolean;
}

function formatarUsuario (dadosBrutos: DadosBrutosusuario):Usuario{
    const novosdados: Usuario = {
        nome: dadosBrutos.nome_completo,
        idade: dadosBrutos.idade,
        ativo: dadosBrutos.ativo === 'sim'
    };

    return novosdados;
  
}

const dadosFormatados = formatarUsuario(dadosBrutos);
console.log (dadosBrutos)
console.log(dadosFormatados);
