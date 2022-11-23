const instrumento = ['Guitarra', 'Baixo', 'Violao'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Porats', {cor: 'Azul', preco: 2000}],
function andar(nome) { console.log(nome)}];

const carros = new Array('ford', 'fiat', 'honda');
carros[2] = 'Ferrari';
carros[3] = 'Kia';
carros[6] = 'Hyundai'
console.log(carros)

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);
const obj = {
  0: 'André',
  1: 'Rafael',
  2: 'Teste',
  length: 3,
}
const objArray = Array.from(obj);

console.log(li);
console.log(arrayLi);

const frutas = ['Banana', 'Pêra', ['Uva roxa', 'Uva verde']];
console.log(frutas[2].length);

const instrumento2 = ['Guitarra', 'Baixo', 'Violao'];
instrumento2.sort();
const idades = [32, 21, 33, 43, 1, 12, 8]
idades.sort();

console.log(idades)
console.log(instrumento2)

const carros2 = ['ford', 'fiat', 'VW'];
carros2.unshift('kia', 'ferrari');
carros2.push('honda', 'chevrolet');
carros2.shift();
carros2.pop();
carros2.reverse();
console.log(carros2);

const carros3 = ['kia', 'ferrari', 'ford', 'fiat', 'VW'];
console.log(carros3);
console.log(carros3.splice(1,1, 'fusca'));
console.log(carros3);

console.log(['item1', 'item2', 'item3', 'item4', 'item5'].copyWithin(2, 0, 2));

console.log(['item1', 'item2', 'item3', 'item4'].fill('Banana', 0, 2));

const transporte1 = ['carro', 'moto'];
const transporte2 = ['barco', 'aviao'];
const transporte3 = transporte1.concat(transporte2);
const transporte4 = [].concat(transporte3, 'onibus');

let htmlString = '<h2>Título Principal</h2>';
htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');
console.log(htmlString);



