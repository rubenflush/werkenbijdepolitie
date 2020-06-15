
function createPassword(input) {
    var oPass = createPasswordOriginal(input),
        nPass = createPasswordNew(input),
        same = oPass == nPass;

    // console.log('Original: [' + oPass+']');
    // console.log('New:      [' + nPass+']');

    same ? console.info('same') : console.error('different');

}










function createPasswordNew(inputParameter) {

    inputParameter = String(inputParameter+" 3:22");

    // For ever character in the second word
    var varO = "";
    for (var varG = 0; varG < inputParameter.split(" ")[1].length; varG++) {

        // Why replacing last two characters?
        varO = btoa('undefined') + varO;
    }

    var counter =1 ;
    var output = "";

    // varR length is determined by input parameter length, with a max of 10
    for (varO.length < Math.min(10, inputParameter.length); counter < 10;) {
        varO += varO;
        counter++;

        // For every character in the first word
        for (var l = 0; l < inputParameter.split(" ")[0].length; l++) {
            output += btoa(inputParameter.split(" ")[0][l] + varO[l]).replace("=", "");
        }
    }

    var varN = Math.floor(10 * Math.random()) + 1; //  [1-10]
    var randomNumberString = Math.random().toString(36).substr(2, varN);

    var varRTake = output.length - 16;

    console.log(output.length, output, varRTake);

    return output.concat(randomNumberString)
        .slice(0, -varN)
        .substring(varRTake);
}

function reverse(output) {

    var randomString = '[0-9a-z]{1,10}';

    // Loop through possible varN (r48)
    for(var i = 1; i < 10; i++) {

    }

    return output;
}

////////////////////////////////////////////////////////
var inputList = ['Ruben', 'Ruben de Vos', 'RRRUBBBENNNE9012 01249IKLJASD 901IMK;L'];
for(var input of inputList) {
    var oPass = createPasswordOriginal(input);

    console.log('Input:                         %c[' + input + ']', 'background: #222; color: #bada55');
    console.log(' ');
    console.log(' ');
    var output = createPasswordNew(input);
    console.log(' ');
    console.log(' ');
    console.log('The output:                    [' + output + ']');
    console.log('Original output:               [' + oPass + ']');
    oPass == output ? console.info('%c same', 'background: #222; color: #bada55') : console.log('%c different',  'background: #ee0000; color: #fff');

    // Now reverse
    var newResult = reverse(output);
    console.log('And the reversed input is:     [' + newResult + ']');

    input == newResult ? alert('IT WORKED') : null;
}









