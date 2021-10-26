// Sua função leva dois argumentos:

// idade do pai atual (anos)
// idade atual de seu filho (anos)
// Calcule quantos anos atrás o pai tinha o dobro da idade do filho (ou em quantos anos ele terá o dobro).
const dadYearsOld = 70
const sonYearsOld = 22
function twiceAsOld(dadYearsOld, sonYearsOld) {
   const double = sonYearsOld * 2;
  const dadysub = dadYearsOld - double
  const doublesub = double - dadYearsOld
  if( dadysub > doublesub){
      return dadysub
  } else {
      return doublesub
  }
}

console.log(twiceAsOld(dadYearsOld, sonYearsOld));