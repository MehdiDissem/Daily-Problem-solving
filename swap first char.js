// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !




function pigIt(str){
    string = str.split(' ')
    for (var i=0; i<string.length; i++){
        if((/([a-zA-Z])/).test(string[i])){
         string[i] +=string[i][0]+'ay'
        string[i]=string[i].slice(1)
    }}
    return string.join(' ')
}

//The fancy way
function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }

console.log(pigIt('Pig latin is cool'))