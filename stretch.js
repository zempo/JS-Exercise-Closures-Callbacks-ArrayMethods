function getConfusingResult() {
  var a = (b = 3);
}

getConfusingResult();

console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));

function createBase(baseNum) {
  return (N) => {
    return baseNum + N;
  };
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

console.log(addSix(10));
console.log(addSix(120));
