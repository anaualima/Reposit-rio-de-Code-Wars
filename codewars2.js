// Você receberá uma série de objetos (matrizes associativas em PHP) que representam dados sobre desenvolvedores que se inscreveram para participar do próximo encontro de programação que você está organizando.

// Sua tarefa é retornar um objeto (array associativo em PHP) que inclui a contagem de cada linguagem de codificação representada no meetup .

var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  ];

  function countLanguages(list) {
    const everyLanguage = Array.from(new Set(list.map((li) => li.language)));
    return everyLanguage.reduce((acc, cv) => {
      acc[cv] = list.filter(({language}) => language === cv).length
      return acc;
    }, {})
  }

console.log(countLanguages(list1));

// new Set deleta itens repetidos do array, porém não tem retorno;
//Array.from cria um novo array;

// const obj = list[0];
// const ArrKeys = Object.values(obj);
// return obj