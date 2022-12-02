const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + ' acelerou';
  },
  buzinar() {
    return this.marca + ' buzinou';
  },
}

const honda = Object.create(carro).init('Honda');

console.log(honda);
// object.assign

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

Object.assign(moto, funcaoAutomovel);
console.log(moto);

// object.defineProperties

const bicicleta = {};

Object.defineProperties(bicicleta, {
  rodas: {
    configurable: false,
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4
    },
  }
});
console.log(bicicleta);

const legumes = ['cenoura', 'chuchu'];
console.log(Object.getPrototypeOf(legumes));

const hyundai = {
  modelo: 'hb20',
  ano: 2019,
}

Object.preventExtensions(hyundai);
delete hyundai.ano;
Object.freeze(hyundai);
Object.seal(hyundai);
hyundai.velocidade = 120;
hyundai.modelo = 'creta';
console.log(hyundai);

