// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

var areYouPlayingBanjo = function(name){
    if (name[0].toUpperCase() == 'R'){
        return name + " plays banjo"
    } 
    return name + " does not play banjo"
}

//for the style

function areYouPlayingBanjo(name) {
    return name + (name[0].toUpperCase() == 'R' ? ' plays' : ' does not play') + " banjo";
  }