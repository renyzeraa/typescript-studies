"use strict";
// Union Types - união de tipos
let xTotal = 200;
xTotal = '4000';
function isNumber(value) {
    return typeof value === 'number';
}
// retorna htmlelement ou null
const oButton = document.querySelector('button');
// o sinal de interrogação é optional chaining
// so vai continuar caso o oButton for diferente de null e undefined
oButton?.click();
/**
 * Exercício
 * 1 - criar uma função chamada toNumber
 * 2 - pode receber number ou string
 * 3 - se receber numero retorne o mesmo
 * 4 - se receber string, retorne um numero
 * 5 - se receber algo diferente retorne erro
 */
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string') {
        return Number(value);
    }
    throw 'Valor deve ser um número ou string';
}
console.log(toNumber(20));
console.log(toNumber('3000'));
console.log(toNumber('x'));
// console.log(toNumber(true))
