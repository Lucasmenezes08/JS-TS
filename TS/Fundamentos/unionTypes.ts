/*
Construir uma função que aceite diferentes tipos de entrada e processe o valor de forma adequada com base 
no seu tipo, utilizando union types e narrowing (verificação de tipo com typeof).
*/


function processarEntrada (valor: string | number | boolean): string{
    if (typeof(valor) === 'string'){
        return valor.toUpperCase();
    }

    else if (typeof(valor) === 'number'){
        return valor.toFixed(2);
    }

    else {
        if (valor === true){
            return 'Sim';
        }
        else {
            return 'Não';
        }
    }
}   

console.log(processarEntrada("hello"));
console.log(processarEntrada(10.357));
console.log(processarEntrada(true));
