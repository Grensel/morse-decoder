const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let array = [];
    let str = expr;
    for (let i = 0; i < expr.length; i ) {
        let letter = str.slice(i , i += 10).replace(/10/g, '.').replace(/11/g, '-').replace(/\*/g, ' ').replace(/          /, ' ').split('00').filter(Boolean);
        let string = '';
        if (letter == ' ') {
            string = string + ' ';
        } else {
            string = string + MORSE_TABLE[letter];
        }
        array.push(string);
    }
    str = array.join('');
    return str;
}

module.exports = {
    decode
}