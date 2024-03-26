type NumberOrString = string | number;

let xtotal: NumberOrString = 20;
xtotal = "30";

interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}

type TypeProduto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados(dados: InterfaceProduto) {
  document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
    </div>
  `;
}

const computador: InterfaceProduto = {
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

type Categorias = "design" | "codigo" | "descod";

function pintarCategoria(categoria: Categorias) {
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

interface Empresa {
  fundacao: number;
  nome: string;
  pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Product) {
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
