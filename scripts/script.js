"use strict";
function normalizar(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizar(" DeSign "));
async function fetchJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    manipularData(data);
}
fetchJSON("https://api.origamid.dev/json/cursos.json");
function manipularData(data) {
    console.log(data.nome);
}
// interface Curso {
//   nome: string;
//   horas: number;
// }
// function mostrarTodosCursos(cursos: Curso[]) {
//   cursos.forEach((curso) => {
//     document.body.innerHTML += `
//       <div>
//         <h2>${curso.nome}</h2>
//         <p>Horas: ${curso.horas}</p>
//       </div>
//     `;
//   });
// }
// const dados: any = "o any gera problemas";
// mostrarTodosCursos(dados);
