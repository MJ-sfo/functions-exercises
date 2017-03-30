// TODO: add your solutions here!
function addWords(first, second) {
  var sentence = first  + second;
  console.log(sentence) ;
  return sentence;
}
addWords("John", "son");

// 2. Repeat a phrase
function display (phrase, numb) {
  for (var i = 0; i < numb; i++) {
    console.log(phrase);
  }
}
display("looping 5 times", 5);

// 3. Build your own Power function
function powerBall (first, power) {
  var result = 1;
  for (var i = 1; i <= power; i++) {
    result = result * first;
  }
  console.log(result);
  return result;
}
powerBall(2, 4);

// 4. Area of a circle: π r2
// psudocode
// input r
// calculate
// return Area

function pieRadiusSq (radius) {
  var area = radius * radius * 3.14;
  console.log(area);
  return area;
}
pieRadiusSq(10);

// 6. Is X Evenly Divisible by Y ?
// psudocode
// if x = 0, return no
//   else if remainder of x/y is 0, then yes,
//     else no

var divisble = true;
function findDivisible (x, y) {
  if (x == 0) {
    return divisble = false;
  }
  else if (x % y == 0) {
   return divisble = true; 
  }  
  else {
    return divisble = false;
  }
 } 
console.log(findDivisible(6,2));