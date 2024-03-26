const numeros = [2, 23, 43, 5, 98, 3]
const valores = ['taxa', 300, 'numeros', 'tipo', 33]

function maiorQue10(data: Array<number>) {
  return data.filter(n => n > 10)
}

// utilizando o generic
function filtrarValores(data: Array<number | string>) {
  return data.filter(item => typeof item === 'number')
}

console.log(maiorQue10(numeros))
console.log(filtrarValores(valores))

/**
 * Exercícios
 */
async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

type Nivel = 'iniciante' | 'avancado'

interface Curso {
  aulas: number
  gratuito: boolean
  horas: number
  idAulas: number[]
  nivel: Nivel
  nome: string
  tags: string[]
}


function mostrarCursos(cursos: Curso[]) {
  cursos.forEach(curso => {
    const color = curso.nivel === "avancado" ? "red" : "blue";

    document.body.innerHTML += `
      <div>
        <h2 style="color: ${color};">${curso.nome}</h2>
        <p>Aulas ${curso.aulas};</p>
        <p>Horas: ${curso.horas};</p>
        <p>Nível: ${curso.nivel};</p>
        <p>Gratuito: ${curso.gratuito ? "Gratuito" : "Pago"};</p>
        <p>Tags: ${curso.tags.join(', ')};</p>
        <p>Identificação das Aulas: ${curso.idAulas}</p>
      </div>
    `
  })
}