
function createPassword(input) {
    var oPass = createPasswordOriginal(input),
        nPass = createPasswordNew(input),
        same = oPass == nPass;

    // console.log('Original: [' + oPass+']');
    // console.log('New:      [' + nPass+']');

    same ? console.info('same') : console.error('different');

}










function createPasswordNew(inputParameter) {

    // Date is added to the string
    inputParameter = inputParameter+" 3:22";

    // For ever character in the second word
    var varO = btoa('undefined').repeat(inputParameter.split(" ")[1].length);

    var output = "";
    for (var counter = 1; counter < 10;counter++) {

        // For every character in the first word
        var firstWord = inputParameter.split(" ")[0];
        for (var item = 0; item < firstWord.length; item++) {

            var wordLetter = firstWord[item];
            var undefinedLetter = varO[item];
            //console.log(btoa(wordLetter + undefinedLetter))
            //console.log(atob(btoa(wordLetter + undefinedLetter)))
            output += btoa(wordLetter + undefinedLetter).replace("=", "");
        }
    }

    // Take the last 16 characters
    return output.substring(output.length-16);
}

function reverse(input) {

    var splitted = input.substring(1).match(/.{3}/g);
    var undefinedList = [];
    var firstWordList = [];
    for(var s = 0; s < splitted.length; s++) {
        var decoded = atob(splitted[s]+'=');

        firstWordList.push(decoded[0]);
        undefinedList.push(decoded[1]);

    }
    return firstWordList.join('');
}

////////////////////////////////////////////////////////
var inputList = ['Ruben'];
//var inputList = ['Ruben de Vos1', 'as', 'asdasdoijasd', 'asdoijasd 98 hiusahdiu hasiud '];
for(var input of inputList) {
    var oPass = createPasswordOriginal(input);

    console.log('Input:                         %c[' + input + ']', 'background: #222; color: #bada55');
    console.log(' ');
    console.log(' ');
    var output = createPasswordNew(input);
    console.log(' ');
    console.log(' ');
    console.log('The output:                    [' + output + ']');
    console.log('Original output:             [' + oPass + ']');
    oPass == output ? console.info('%c same', 'background: #222; color: #bada55') : console.log('%c different',  'background: #ee0000; color: #fff');

    // Now reverse
    var newResult = reverse(oPass);
    console.log('And the reversed input is:     [' + newResult + ']');

    input === newResult ? console.info('%cIT WORKED', 'background-color:green;font-size:1.8em;') : null;
}









