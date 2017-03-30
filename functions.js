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