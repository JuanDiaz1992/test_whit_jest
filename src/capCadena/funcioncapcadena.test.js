const capCadena = require("./funcioncapcadena");

describe("Test con datos correctos",()=>{
    test("Verificar la conversión de una cadena a título ", () => {
        const result = capCadena("hola mundo :d");
        expect(result).toBe("Hola Mundo :D");
    });
    test("Comprobar que una cadena vacía devuelva una cadena vacía ", () => {
        const result = capCadena("");
        expect(result).toBe("");
    });
    test("Asegurar que una cadena ya en título no cambie", () => {
        const result = capCadena("Hola Mundo");
        expect(result).toBe("Hola Mundo");
    });
})

describe("Test con datos incorrectos",()=>{
    test("Verifica si al ingresar un número devuelve un error ", () => {
        const error = "El argumento debe ser una cadena de caracteres.";
        expect(() => capCadena(12)).toThrow(error);
    });
})