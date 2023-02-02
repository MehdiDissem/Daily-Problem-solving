// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
    const escape = (string) => string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    if (input[input.length-1] !== "\n") input += "\n";
    markers.map(m => escape(m)).forEach(m => input = input.replace(RegExp(`\ *${m}.*?\n`), "\n"));
    return input.slice(0,-1);
};