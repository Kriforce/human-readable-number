module.exports = function toReadable (number) {
    let str = String(number);
    let zero_nine = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let twenty_ninety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let eleven_nineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    return str == '0' ? 'zero' :
        str.length <= 1 ? zero_nine[number] : 
        str.length == 2 && str[0] == '1' ? eleven_nineteen[+str[1]] :
        str.length == 2 && str[1] == '0' ? twenty_ninety[+str[0]] :
        str.length == 2 && str[1] !== '0' ? twenty_ninety[+str[0]] + ' ' + zero_nine[+str[1]] :
        str.length == 3 && str[1] == '0' && str[2] == '0' ? zero_nine[+str[0]] + ' hundred' : 
        str.length == 3 && str[1] == '1' ? (zero_nine[+str[0]] + ' hundred ' + eleven_nineteen[+str[2]]):
        str.length == 3 && str[1] !== '0' && str[2] == '0' ? zero_nine[+str[0]] + ' hundred ' + twenty_ninety[+str[1]] :
        str.length == 3 && str[1] == '0' && str[2] !== '0' ? zero_nine[+str[0]] + ' hundred ' + zero_nine[+str[2]] :
        str.length == 3 && str[1] !== '0' && str[2] !== '0' ? zero_nine[+str[0]] + ' hundred ' + twenty_ninety[+str[1]] + ' ' + zero_nine[+str[2]] : 'undefined';
}
