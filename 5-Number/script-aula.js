console.log(Number.isNaN(NaN));
console.log(Number.isInteger(20.2));

console.log(Number.parseFloat('45.69'));
console.log(Number.parseInt('45.69'));

const preco = 10.323
console.log(preco.toFixed()) //retorna string
console.log(+preco.toFixed()) //retorna numero

let valor = 48.49;
valor = valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
console.log(valor);

console.log(Math.PI)



