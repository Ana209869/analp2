//CLASSE

class Pessoa1 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

const Pessoa1 = new Pessoa1('Miguel', 30);
Pessoa1.cumprimentar();  

//OBJETO 

const pessoa2 = {
    nome: 'Miguel',
    idade: 25,
    ocupacao: 'Engenheira de Software'
};

console.log(pessoa2.nome); 

//ATRIBUTO

const pessoa3 = {
    nome: 'Miguel',
    idade: 30,
    ocupacao: 'Engenheira de Software'
};

console.log(pessoa3.idade); 

//MÉTODO 

class Pessoa4 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

const pessoa = new Pessoa4('Miguel', 30);
pessoa.cumprimentar(); 

//HERANÇA

class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    som() {
        console.log('O animal faz um som.');
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }

    som() {
        console.log('O cachorro late.');
    }
}

const cachorro = new Cachorro('Rock', 'Rottweiler');
cachorro.som(); // 

//POLIMORFISMO 

class Forma {
    area() {
        console.log('A área da forma é desconhecida.');
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    area() {
        console.log(`A área do círculo é ${Math.PI * this.raio ** 2}.`);
    }
}

class Retangulo extends Forma {
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    area() {
        console.log(`A área do retângulo é ${this.largura * this.altura}.`);
    }
}

const circulo = new Circulo(5);
circulo.area(); 

const retangulo = new Retangulo(4, 6);
retangulo.area(); 