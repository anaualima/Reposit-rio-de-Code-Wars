// Neste kata, você pegará as chaves e os valores de an objecte os trocará.

// Você receberá um dicionário e, em seguida, retornará um dicionário com os valores antigos como as chaves e listar as chaves antigas como valores sob suas chaves originais.

// Por exemplo, dado o dicionário: {'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream'},

// você deve retornar: {'Cream': ['Ice', 'Double', 'Light'], '21': ['Age']}

// Notas:
// O dicionário fornecido conterá apenas strings
// O dicionário fornecido não estará vazio
// Você não tem que classificar os itens nas listas

function switchDict(dict) {
  const values = Object.entries(dict)
  return values.reduce((acc, cv) => {
      if(!acc[cv[1]]) {
          acc[cv[1]] = [];
      }
      acc[cv[1]].push(cv[0]);
      return acc
  }, {})
}

console.log(switchDict({'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream'}));