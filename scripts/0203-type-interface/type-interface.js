"use strict";
let xtotal = 20;
xtotal = "30";
function preencherDados(dados) {
    document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
    </div>
  `;
}
const computador = {
    nome: "Computador",
    preco: 2000,
    teclado: true,
};
preencherDados(computador);
preencherDados({
    nome: "Notebook",
    preco: 2500,
    teclado: false,
});
function pintarCategoria(categoria) {
    if (categoria === "design") {
        console.log("Pintar vermelho");
    }
}
pintarCategoria("design");
/**
 * Exercícios
 */
async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>
      <div>
        <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
      </div>
      <div>
        <h3>Montadora: ${data.empresaMontadora.nome}</h3>
      </div>
    </div>
  `;
}
