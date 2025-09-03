const { somarDoisNumeros }  = require('../src/calculadora');
const { expect }  = require('chai');


describe('Resultado da Soma de dois números', function () {
    it('A função deve ser capaz de somar dois números zerados', function() {
        const resultadoDaSomaDeDoisNumeros = somarDoisNumeros(0, 0)

        expect(resultadoDaSomaDeDoisNumeros).to.equal(0);
    });

    it('A função deve ser capaz de somar dois números negativos', function() {
        const resultadoDaSomaDeDoisNumeros = somarDoisNumeros(-15, -20)

        expect(resultadoDaSomaDeDoisNumeros).to.equal(-35);
    });
})