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

// 7. Vowel Count
// create loop - length of string
// make sum variable
// each loop :
// convert letter to lowercase
// compare letter with array of Vowels - if true, add one to sum
// after finish all loops, return sum

var sum = 0;
function findVowels (text) {   
  for (var i = 0; i < text.length; i++ ) {
  var letter = text.charAt(i).toUpperCase();
  //each letter changed to uppercase
  // now check if letter is a vowel
  var vowels = "AEIOU";
    if (vowels.indexOf(letter) > -1) {
        // indexOf returns value of -1 if string not found in second string
        sum = sum +1;
    }
  }
  console.log(sum);
  return sum;
}
findVowels("Happy");

// 8 Does the array contain "wdi"?
// loop through array - length of array times
// compare each element to "wdi"
// return true or false

var containWdi = false;
function findWdi (testArray) {
  for (var i = testArray.length - 1; i >= 0; i--) {
    if (testArray[i] == "wdi") {
      containWdi = true;
      console.log(containWdi);
      return containWdi;
    }
    else {
      containWdi = false;
      console.log(containWdi);
      return containWdi;
    }
  }
}
var sampleArrray = [9,'Bart Simpson', true, 'wdi'];
findWdi(sampleArrray);