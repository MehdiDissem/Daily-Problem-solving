// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z


function accum(s) {
	var acc = ''
    var newString= s.toLowerCase()
    for (var i = 0; i<newString.length;i++){
        acc = acc + newString[i].toUpperCase()
        console.log(acc)
        for (var j=0;j<i;j++){
            acc = acc + newString[i]
        }
        acc = acc + "-"
    }
    return acc.substring(0,acc.length-1)
}