const carros = ['Ford', 'Fiat', 'Honda'];

//carros.forEach(function(item, index, array) {
 // console.log(item, index, array);
//})

//const novaArray = carros.map((item, index, array) => {
 // console.log(item, index, array);
//  return item.toUpperCase()
//})
//console.log(novaArray)

// exemplo

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);
console.log(tempoAulas);

function nomeAulas(aula) {
  return aula.nome
}

const arrayNomeAula = aulas.map(nomeAulas);
console.log(arrayNomeAula);

// reduce

const aulas2 = [10, 25, 30];
const reduceAulas = aulas2.reduce((acumulador, item, index, array) => {
  return acumulador + item;
}, 0)
console.log(reduceAulas);

// maior valor com reduce

const numeros = [10, 2, 30, 3, 54, 33, 22];
const maior = numeros.reduce((anterior, atual) => {
  if(anterior > atual)
    return anterior
  else
    return atual  
}, 0)
console.log(maior);

//some

const frutas = ['banana', 'pêra', 'uva verde'];
const temUva = frutas.some((item) => {
  return item === 'uva verde';
})
console.log(temUva);

// every
const every = frutas.every((item) => {
  return item === 'uva verde';
})
console.log(every)

// filter
const frutas2 = ['banana', undefined, null, '', 'uva', 0, 'maçã'];
const arrayFrutas = frutas2.filter((item) => {
  return item;
})
console.log(arrayFrutas);
