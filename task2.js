import { transliterate } from 'transliteration'; //вариант 1: через использование библиотеки 

const result = transliterate('Привет, мир!');
console.log(result); 

const str = "Привет, мир!"; //вариант 2: собственный словарь

const translitMap = {
  'а': 'a',  'б': 'b',  'в': 'v',  'г': 'g',  'д': 'd',
  'е': 'e',  'ё': 'yo', 'ж': 'zh', 'з': 'z',  'и': 'i',
  'й': 'y',  'к': 'k',  'л': 'l',  'м': 'm',  'н': 'n',
  'о': 'o',  'п': 'p',  'р': 'r',  'с': 's',  'т': 't',
  'у': 'u',  'ф': 'f',  'х': 'h',  'ц': 'ts', 'ч': 'ch',
  'ш': 'sh', 'щ': 'shch', 'ъ': '',  'ы': 'y',  'ь': '',
  'э': 'e',  'ю': 'yu', 'я': 'ya',
};

const translit = (str) => {
    return str.split('')
        .map(char => {
          const lower = char.toLowerCase();
          const translitChar = translitMap[lower] ?? lower;

          return char === char.toUpperCase() && char !== char.toLowerCase() 
          ? translitChar.charAt(0).toUpperCase() + translitChar.slice(1)
          : translitChar;
        })
        .join('');
}

console.log(translit(str));

