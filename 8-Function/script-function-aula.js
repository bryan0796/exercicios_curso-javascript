
function somar(n1, n2) {
  return n1 + n2;
 };
console.log(somar(3,3));


function descricaoCarro(velocidade) {
  console.log(this.marca + ' ' + this.ano + ' ' + velocidade); 
};
descricaoCarro.call({marca: 'honda', ano: 2015}, 180);

function Dom(seletor) {
  this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe);
}

const ul = new Dom('ul');
//const li = {
//  element: document.querySelector('li'),
//}
//ul.ativo.call(li, 'ativo');

const frutas = ['uva', 'maçã', 'banana'];
Array.prototype.pop.call(frutas);
// = frutas.pop()

const li = document.querySelectorAll('li');
const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains('ativo');
});
console.log(filtro)
console.log(li);


