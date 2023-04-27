function encontrarMaior(num1, num2, num3) {
  let maior = num1;
  if (num2 > maior) {
    maior = num2;
  }
  if (num3 > maior) {
    maior = num3;
  }
  return maior;
}


function ordenarCrescente(num1, num2, num3) {
  let numeros = [num1, num2, num3];
  numeros.sort(function (a, b) { return a - b });
  return numeros;
}


function exibirMaior() {

  let num1 = parseInt(prompt("Primeiro numero: "));
  let num2 = parseInt(prompt("Segundo numero: "));
  let num3 = parseInt(prompt("Terceiro numero: "));


  let maiorNumero = encontrarMaior(num1, num2, num3);
  alert("O maior numero: " + maiorNumero);
}


function exibirOrdenados() {

  let num1 = parseInt(prompt("Primeiro numero: "));
  let num2 = parseInt(prompt("Segundo numero: "));
  let num3 = parseInt(prompt("Terceiro numero: "));


  let numerosOrdenados = ordenarCrescente(num1, num2, num3);
  alert("Ordem crescente: " + numerosOrdenados.join(", "));
}