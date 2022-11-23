// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade, andar) {
  this.nome = nome;
  this.idade = idade;
  this.andar = (andar) => {
    console.log(this.nome + ' andou');
  }
};

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const Joao = new Pessoa('João',20);
const Maria = new Pessoa('Maria', 25);
const Bruno = new Pessoa('Bruno', 15);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = (classe) => {
    elementList.forEach((element) => {
      element.classList.add(classe);
    })
  };
  this.removeClass = (classe) => {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    })
  };
};

const listaItens = new Dom('li');
const ul = new Dom('ul');