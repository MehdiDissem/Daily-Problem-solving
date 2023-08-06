// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var str1 = str.split("");
  var x = "aeiou";
  var count = str1.filter((element) => x.includes(element));
  return count.length;
}
