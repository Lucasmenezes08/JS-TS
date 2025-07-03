/*
Gerencie uma lista de tarefas. Cada tarefa é representada por uma tupla contendo nome e status (boolean). 
Também haverá uma lista com apenas os nomes das tarefas.
*/


let pendList: string[] = ["Estudar TypeScript", "Fazer exercícios", "Revisar código"];
let listWithStatus: [string, boolean] [] = [
    ["Estudar TypeScript", true],
    ["Fazer exercícios", false],
    ["Revisar código", true],
];


function listarTarefasConcluidas (tuple: [string , boolean ][]): string[]{
    const nomesTrue: string[] = tuple.filter(([ , finalizadas]) => finalizadas).map(([nome]) => nome);
    return nomesTrue;   
}

console.log(listarTarefasConcluidas(listWithStatus));