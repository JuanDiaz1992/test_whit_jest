const factorialRecursivo = require("./funcionfactorial");

describe("Test datos correctos en función factorial", () => {
    test("Verificar el cálculo correcto del factorial de un número", () => {
        const result = factorialRecursivo(5);
        expect(result).toBe(120);
    });

    test("El factorial de 0 sea 1", () => {
        const result = factorialRecursivo(0);
        expect(result).toBe(1);
    });
});

describe('Test datos erroneos en función factorial', () => {
    test("El factorial de un número negativo debería devolver NaN", () => {
        const result = factorialRecursivo(-10);
        expect(result).toBe(NaN);
    });
    test("Si se ingresa un String debería devolver NaN", () => {
        const result = factorialRecursivo("Hola mundo :D");
        expect(result).toBe(NaN);
    });
    test("Si se ingresa un número decimal debe retornar NaN", () => {
        const result = factorialRecursivo(5.4);
        expect(result).toBe(NaN);
    });
});