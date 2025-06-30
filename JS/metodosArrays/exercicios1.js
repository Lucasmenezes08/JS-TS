//exercicio 1

/*
function somaAteN(n) {
    if (n == 0){
        return n;
    }

    else {
        return n + somaAteN(n - 1);
    }
}

console.log(somaAteN(5)); // 15

*/


//exercicio 2 

/*
function ehPalindromo(palavra) {
    const flag = false;
    let i = 0;
    let j = palavra.length - 1;

    while (i < j){
        if (palavra[i] == palavra[j]){
            return true;
            i ++;
            j --;
        }

        return false;
        
    }

}

console.log(ehPalindromo("arara")); 
console.log(ehPalindromo("banana")); 

*/