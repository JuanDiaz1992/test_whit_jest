// Definir si un número es primo

function esPrimo(numero) {
    if (typeof numero != 'number' || !Number.isInteger(numero) || numero < 0 ) {
        return NaN;
    }
    if (numero === 1) {
        return false;
    }
    let raiz = Math.floor(Math.sqrt(numero)) + 1;
    for(let i = 2; i < raiz; ++i) {
        if (numero % i == 0) {
            return false;
        }
    }
    return true;
}
module.exports = esPrimo;