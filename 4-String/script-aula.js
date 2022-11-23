const comida = 'Pizza';
const agua = new String('Agua');
const frase = 'A melhor comida';

console.log(comida.length);
console.log(agua.length);

console.log(agua[0]);
console.log(frase[frase.length-1]);
console.log(frase.charAt([frase.length-1]));

// concatenar
const frase2 = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseFinal = frase2.concat(linguagem, '!!');
console.log(fraseFinal);

const fruta = 'Banana';
const listaFruta = 'Melancia, Banana, Laranja';
console.log(fruta.includes(listaFruta));
console.log(listaFruta.includes(fruta));

// slice
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 10)); // Dep
console.log(transacao2.slice(0, 3)); // Dep
console.log(transacao3.slice(0, 5)); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

console.log(fruta.indexOf('a'));
console.log(fruta.lastIndexOf('a'));

const preco = 'R$ 99,00';
console.log(preco.padStart(10, ''))

// repeat
const frase3 = 'Ta';

console.log(frase3.repeat(5)); // TaTaTaTaTa

// replace
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco2 = 'R$ 1200,43';
preco2 = preco2.replace(',', '.'); // 'R$ 1200.43'

// split
const listaItens2 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens2.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');





