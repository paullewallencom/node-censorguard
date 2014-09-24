var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];

function censor(inStr) {
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx], "****");
    }
    for (idx in customCensoredWords) {
        inStr = inStr.replace(customCensoredWords[idx], "****");
    }
    return inStr;
}

/*

function censor(inStr) {
    for (var i=0; i < censoredWords.length; i++){
        inStr = inStr.replace(censoredWords[i], "****");
    }
    for (var i=0; i < customCensoredWords.length; i++){
        inStr = inStr.replace(customCensoredWords[i], "****");
    }
    return inStr;
}

*/

function addCensoredWord(word){
    customCensoredWords.push(word);
}
function getCensoredWords(){
    return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWord = getCensoredWords;