const { somarDoisNumeros }  = require('../src/calculadora');
const { expect }  = require('chai');


describe('Testes da Função de Soma', function () {
    it('A função deve ser capaz de somar dois números positivos', function () {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(5,3);

        // Compara o resultado com o valor que você espera
    expect(resultadoDaSoma).to.equal(8);
    });

    it('A função deve ser capaz de somar um número positivo e um negativo', function () {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(50, -15);

        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(35);
    });
    it('A função deve ser capaz de somar dois números zerados', function() {
        const resultadoDaSomaDeDoisNumeros = somarDoisNumeros(0, 0)

        expect(resultadoDaSomaDeDoisNumeros).to.equal(0);
    });

    it('A função deve ser capaz de somar dois números negativos', function() {
        const resultadoDaSomaDeDoisNumeros = somarDoisNumeros(-15, -20)

        expect(resultadoDaSomaDeDoisNumeros).to.equal(-35);
    });
})