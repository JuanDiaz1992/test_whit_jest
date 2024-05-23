const esPrimo = require("./funcionprimo")

describe("Test datos correctos en función esPrimo", () => {
    test("Verificar que ingresar un número primo devuelva true", () => {
        const result = esPrimo(5);
        expect(result).toBeTruthy();
    });
});

describe('Test datos erroneos en función esPrimo', () => {
    test("Verificar que un número no primo devuelva false", () => {
        const result = esPrimo(6);
        expect(result).toBeFalsy();
    });

    test("Asegurar que 1 no sea considerado primo", () => {
        const result = esPrimo(1);
        expect(result).toBeFalsy();
    });

    test("Un número negativo debería devolver NaN", () => {
        const result = esPrimo(-15);
        expect(result).toBe(NaN);
    });
    test("Un String debería devolver NaN", () => {
        const result = esPrimo("Hola Mundo :D");
        expect(result).toBe(NaN);
    });

    test("Un String debería devolver NaN", () => {
        const result = esPrimo("Hola Mundo :D");
        expect(result).toBe(NaN);
    });



});