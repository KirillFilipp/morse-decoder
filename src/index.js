const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};
const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";

function decode(expr) {
  const c = expr.length;
  let a = c / 10;
  const alpha = [];
  let decoded;
  const ten = '.';
  const eleven = '-';
  let stringMorse;
  let accum = '';
  let morse;
  const finish = [];

  for (let i = 0; i < c; i = i + 10) {
    decoded = expr.slice(i, i + 10);
    alpha.push(decoded);
  }

  stringMorse = alpha.toString();

  stringMorse.replace(/(10)|(11)|(,)/g, function (match, p1, p2, p3) {
    if (p1) { accum += ten; }
    if (p2) { accum += eleven; }
    if (p3) { accum += ','; }
  });

  morse = accum.split(',');

  for (let i = 0; i < morse.length; i++) {
    if (MORSE_TABLE[morse[i]]) {
      finish.push(MORSE_TABLE[morse[i]]);
    } else { finish.push(' '); }
  }
  return finish.join('');
}

module.exports = {
  decode
}