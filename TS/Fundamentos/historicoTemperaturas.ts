/*
Controlar um histórico de temperaturas com tuplas que indicam o dia e a temperatura registrada.
*/

let historicoTemperaturas: [string , number][] = [
    ["segunda" , 30],
    ["terca" , 25],
    ["Quarta" , 20],
    ["sabado" , 10],
    ["quinta" , 35],
    ["domingo" , 33],
    ["sexta" , 11]
]

function filtrarTemperaturasAltas (temperaturas: [string , number][]): string[]{
    const dias:string[] = temperaturas.filter(([ , temperatura]) => temperatura > 20).map(([dia])=> dia);
    return dias;
}

console.log (filtrarTemperaturasAltas(historicoTemperaturas));