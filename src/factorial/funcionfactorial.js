//Factorial
function factorialRecursivo(numero) {
        if (typeof numero != 'number' || !Number.isInteger(numero) || numero < 0) {
            return NaN;
        }
        if (numero == 0) {
            return 1;
        } else {
            return numero * factorialRecursivo(numero - 1);
        }
}
module.exports = factorialRecursivo;
