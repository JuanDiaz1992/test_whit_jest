//Capitalizar
function capCadena(frase) {
    if (typeof frase != 'string') {
        throw new Error('El argumento debe ser una cadena de caracteres.');
    }
    return frase.replace(/\w\S*/g, function(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
}
module.exports = capCadena;