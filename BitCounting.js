// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

const BigNumber = require('bignumber.js');
//some test need bignumber in order for some tests to pass
var countBits = function(n) {
    var output = 0
    var x = new BigNumber(n).toString(2);
    console.log(x)
    for(var i=0; i<x.length;i++){
        console.log(x[i])
        if(Number(x[i]) == 1){
            output = output + Number(x[i])
        }
    }
    return output
};

//refactor :
var countBits = function(n) {
    return n.toString(2).replace(/0/g,'').length;
  };