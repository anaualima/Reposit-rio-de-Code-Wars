// Escreva uma função para dividir uma string e convertê-la em um array de palavras. Por exemplo:

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arra...

const phrase = 'Robin Singh';

const stringToArray = (string) => string.split(' ');
console.log(stringToArray(phrase))