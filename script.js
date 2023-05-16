let number1 = prompt('Digite o primeiro número:');
let number2 = prompt('Digite o segundo número:');

let soma = Number(number1) + Number(number2);
let sub = Number(number1) - Number(number2);
let mult = Number(number1) * Number(number2);
let div = Number(number1) / Number(number2);
let restDiv = Number(number1) % Number(number2);

alert('O resultado da soma é: ' + soma);
alert('O resultado da subtração é: ' + sub);
alert('O resultado da multiplicação é: ' + mult);
alert('O resultado da divisão é :' + div);
alert('O resto da divisão é: ' + restDiv);

function isEven(num) {
  return num % 2 ? 'impar' : 'par';
}

alert(isEven(soma));
