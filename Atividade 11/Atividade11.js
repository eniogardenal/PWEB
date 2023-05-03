//Calcular área de um retangulo

function Retangulo(base, altura) {
  this.base = base;
  this.altura = altura;
  this.calcularArea = function () {
    return this.base * this.altura;
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const base = Number(document.getElementById('base').value);
  const altura = Number(document.getElementById('altura').value);

  const retangulo = new Retangulo(base, altura);
  alert(`A área do retângulo é ${retangulo.calcularArea()}`);
});

//Conta Corrente

class Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo) {
    this.nomeCorrentista = nomeCorrentista;
    this.banco = banco;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }

  getNomeCorrentista() {
    return this.nomeCorrentista;
  }

  setNomeCorrentista(nomeCorrentista) {
    this.nomeCorrentista = nomeCorrentista;
  }

  getBanco() {
    return this.banco;
  }

  setBanco(banco) {
    this.banco = banco;
  }

  getNumeroConta() {
    return this.numeroConta;
  }

  setNumeroConta(numeroConta) {
    this.numeroConta = numeroConta;
  }

  getSaldo() {
    return this.saldo;
  }

  setSaldo(saldo) {
    this.saldo = saldo;
  }
}

class ContaCorrente extends Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo, limiteEspecial) {
    super(nomeCorrentista, banco, numeroConta, saldo);
    this.limiteEspecial = limiteEspecial;
  }

  getLimiteEspecial() {
    return this.limiteEspecial;
  }

  setLimiteEspecial(limiteEspecial) {
    this.limiteEspecial = limiteEspecial;
  }
}

class ContaPoupanca extends Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo, taxaJuros, dataVencimento) {
    super(nomeCorrentista, banco, numeroConta, saldo);
    this.taxaJuros = taxaJuros;
    this.dataVencimento = dataVencimento;
  }

  getTaxaJuros() {
    return this.taxaJuros;
  }

  setTaxaJuros(taxaJuros) {
    this.taxaJuros = taxaJuros;
  }

  getDataVencimento() {
    return this.dataVencimento;
  }

  setDataVencimento(dataVencimento) {
    this.dataVencimento = dataVencimento;
  }
}

function criarContas() {
  // Exemplo de criação de contas
  let contaCorrente = new ContaCorrente("João", "Banco do Povo", "777666", 1050, 500);
  let contaPoupanca = new ContaPoupanca("Maria", "Criptomoedas", "969085", 4700, 0.05, "15/06/2023");

  // Exemplo de uso das contas
  alert(`Conta Corrente: ${contaCorrente.getNomeCorrentista()} - Saldo: R$ ${contaCorrente.getSaldo()} - Limite Especial: R$ ${contaCorrente.getLimiteEspecial()}`);
  alert(`Conta Poupança: ${contaPoupanca.getNomeCorrentista()} - Saldo: R$ ${contaPoupanca.getSaldo()} - Taxa de Juros: ${contaPoupanca.getTaxaJuros()} % - Data de Vencimento: ${contaPoupanca.getDataVencimento()}`);
}