'use strict'
/**
 * Annotation e Inference
 */
// Anotação
let produto
let preco
produto = 'Ração'
/*produto = 20 */ // Ira dar erro pois produto so recebe string
preco = 20
// Inferência
const carro = {
  marca: 'Fiat',
  modelo: '500',
  ano: 2020,
  andar() {
    console.log('andei')
  }
}
carro.modelo = 'Toro'
// automaticamente o carro ira ter referência de seus atributos e métodos presentes nele
/**
 * Exercício
 */
function normalizarTexto(texto) {
  return texto.trim().toLowerCase()
}
const input = document.querySelector('input')
const total = localStorage.getItem('total')
function calcularGanho(value) {
  const p = document.querySelector('p')
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`
  }
}
function totalMudou() {
  if (input) {
    localStorage.setItem('total', input.value)
    calcularGanho(Number(input.value))
  }
}

if (input) {
  input.addEventListener('keyup', totalMudou)

  if (total) {
    input.value = String(total)
    calcularGanho(Number(input.value))
  }
}
