// You are given a node that is the beginning of a linked list. 
// This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.
// For example in the following picture the size of the dangling piece is 3 and the loop size is 12:
// // Use the `getNext' method or 'next' property to get the following node.
// node.getNext()
// node.next
// Notes:
// do NOT mutate the nodes!
// in some cases there may be only a loop, with no dangling piece

function loop_size(node){
    var currentNode = node
      var arr = [];
      while (currentNode && arr.indexOf(currentNode) < 0) {
        arr.push(currentNode);
        currentNode = currentNode.next;
      }
      var firstIndex = Math.max(0, arr.indexOf(currentNode));
      return arr.length - firstIndex;
}

//I have time complexity problem in this code, but it works! gotta refactor it

