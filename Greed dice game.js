// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, 
//is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. 
//For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, 
//but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.




function score(dice) {
    var greed = [];
    var sorted = dice.sort((a,b) => a - b); 
    var points = { 1: 1000, 2: 200, 3: 300, 4: 400, 5: 500, 6: 600 }
    var groupArray; 
    
    sorted.forEach((element, i) => {
      if (sorted[i-1] !== element) {
        groupArray = [];
        greed.push(groupArray);
      };
      groupArray.push(element);
    })
    
    return greed.reduce((acc, cur) => {
      if (cur.includes(1)) {
        return acc + (100 * (cur.length % 3)) + (points[cur[0]] * Math.floor(cur.length/3));
      }
      if (cur.includes(5)) {
        return acc + (50 * (cur.length % 3)) + (points[cur[0]] * Math.floor(cur.length/3));
      }
      if (cur.length > 2) {
        return acc + (points[cur[0]] * Math.floor(cur.length/3));
      }
      return acc;    
    }, 0); 
  }

  console.log(score([5,1,3,4,1])) //250