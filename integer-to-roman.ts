function intToRoman(num: number): string {
    
    let numberToConvert = num;
    let romanNumber = "";
    let hundredsSymbols = {
        1 : 'C',
        2 : 'CC',
        3 : 'CCC',
        4 : 'CD',
        5 : 'D',
        6 : 'DC',
        7 : 'DCC',
        8 : 'DCCC',
        9 : 'CM'
    }
    let tensSymbols = {
        1 : 'X',
        2 : 'XX',
        3 : 'XXX',
        4 : 'XL',
        5 : 'L',
        6 : 'LX',
        7 : 'LXX',
        8 : 'LXXX',
        9 : 'XC'
    }
    let unitsSymbols = {
        1 : 'I',
        2 : 'II',
        3 : 'III',
        4 : 'IV',
        5 : 'V',
        6 : 'VI',
        7 : 'VII',
        8 : 'VIII',
        9 : 'IX'
    }
    //calculate thousands place then hundreds, then tens and then unit place
    
    if(numberToConvert >= 1000) {
        let thousandsPlace = Math.floor(numberToConvert / 1000);
        romanNumber += 'M'.repeat(thousandsPlace);
        numberToConvert = numberToConvert % 1000;
    }
    if(numberToConvert >= 100 && numberToConvert < 1000) {
        let hundredsPlace = Math.floor(numberToConvert / 100);
        romanNumber += hundredsSymbols[hundredsPlace];
        numberToConvert = numberToConvert % 100;
    }
    if(numberToConvert >= 10 && numberToConvert < 100) {
        let tensPlace = Math.floor(numberToConvert / 10);
        romanNumber += tensSymbols[tensPlace];
        numberToConvert = numberToConvert % 10;
    }
    if(numberToConvert >= 1 && numberToConvert < 10) {
        romanNumber += unitsSymbols[numberToConvert];
    }
    return romanNumber;
};