// General Assembly, WDI (Web Development Immersive) Remote, Cohort 04 (Matey)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

/// Basic Data Types and Expressions ///
// For each expression below, indicate whether it is 'truthy' or 'falsey'
// by assigning the appropriate variable a value of either `true` or `false`.

// 1. true || false 
var resOne;
let resOne =  truthy
// 2. null || ''
var resTwo;
let resTwo = false

// 3. 'false' && true
var resThree;
resThree = true
// 4. !!0
var resFour;
resFour = false
// 5. !null && !undefined
var resFive;
// Replace This Comment With Your Code

/// Flow Control ///

// 6. Write a `while` loop that increases `resSix` by 23 until `resSix` is five
//    digits long. (Hint: take a look at the .toString() method)
var resSix;
let reSix = 5
while (reSix.toString().length >= 5); {
  alert(i);
  reSix + 23;
}


// 7. Write a `while` loop that increases `resSeven` by 12 when it's strictly
//    below 95, decreases it by 7 when it's strictly above 105, and stops as
//    soon as `resSeven` equals or falls between those two values.
var resSeven =;
let reSix = 10
while (reSeven < 95 || reSeven > 105){}
if (reSeven < 95) {
  resSeven + 12}
else if (reSeven > 105) {}
  reSeven - 7}
else {
  alert(reSeven)
}

  
// Replace This Comment With Your Code

// 8. Write a `for` loop that counts from 0 (inclusive) to 1857 (exclusive) and
//    calculates the sum of all of those numbers, storing the result in the
//    variable `resEight`.
var resEight= [];
for (i = 0; i >= 0 && i < 1857 ; i++) {
  resEight.push(someArray.sum)
}

var resEight;
resEight = 0;
for (var i = 0; i <= 1856; i++) { // or i < 1857
  resEight += i;
}
// 9. Using a `for` loop, calculate the sum of all multiples of 7 between 0
//    (inclusive) and 1000 (exclusive); store the result in the variable
//    `resNine`.
var resNine;


// 10. For numbers 1-10, calculate n^n and then store the sum of all of these values in the variable `resTen`.
var resTen;
// Replace This Comment With Your Code

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  one: resOne,
  two: resTwo,
  three: resThree,
  four: resFour,
  five: resFive,
  six: resSix,
  seven: resSeven,
  eight: resEight,
  nine: resNine,
  ten: resTen
}
