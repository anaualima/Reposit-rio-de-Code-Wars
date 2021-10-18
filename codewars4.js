// Dado um array de inteiros, retorne um novo array com cada valor dobrado.

// Por exemplo:

// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
   return x.map( n => n * 2);
}

console.log(maps([1, 2, 3]));