
const everyLanguage = Array.from(new Set(list.map((li) => li.language)));
return everyLanguage.reduce((acc, cv) => {
    acc[cv] = list.filter(({ language }) => language === cv).length
    return acc;
}, {})