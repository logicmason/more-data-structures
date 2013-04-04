/*
Given a function which produces a random integer in the range 1 to 5,
write a function which produces a random integer in the range 1 to 7.
*/

// we ggenerate random number between 1 and 5
var rand5plus1 = function() { return 1 + Math.floor(Math.random()*5); }

var rand5 =  function() { return rand5plus1() -1; }

var rand25 = function() {
  return rand5() + 5 * rand5();
}

// we get a number between 0 and 25
// we re-roll digits more than 20 because we want an equal
// distribution of 7 results
// modulo by 7 using the result
// add one to give us the result between 1 and 7
var rand7 = function () {
  var x = rand25();
  if (x > 20) return rand7();
  return (x % 7) + 1;
}



/*
Write a regular expression which matches a email address.
*/
var emailMatcher = /(\w|\+|\.|\-)+@\w+\.\w{2,}/;



/*
Write a function f(a, b) which takes two strings as arguments and
returns a string containing only the characters found in both strings,
in the order that they appeared in a.
Write a version which is order N-squared and one which is order N.
*/

// Nsquared version
var mergeStrings = function(a, b) {
  var charMatcher = /[^\s,'&~$^_\-"]/;
  var arr1 = a.split('');
  var arr2 = b.split('');
  var result = "";
  for (var i = 0, len = a.length; i < len; i++) {
    //if (charMatcher.test(arr1[i])) result += arr1[i];
    if (charMatcher.test(arr1[i])) {
      for (var j = 0, len2 = b.length; j < len2; j++) {
        if (arr1[i] === arr2[j]) {
          result += arr1[i];
          arr2[j] = null;
          j = len2;
        }
      }
    }
  }
  return result;
}

// order N version
var parseB = function(b) {
  var result = {};
  for (var i = 0, len = b.length; i < len; i++) {
    if (result[b[i]]) {
      result[b[i]] += 1;
    } else {
      result[b[i]] = 1;
    }
  }
  return result;
};

var mergeStringsOrderN = function(a, b) {
  var charMatcher = /[^\s,'&~$^_\-"]/;
  var arr1 = a.split('');
  var arr2 = b.split('');
  var result = "";
  var bCounterHash = parseB(arr2);
  for (var i = 0, len = arr1.length; i < len; i++) {
    if (charMatcher.test(arr1[i])) {
      if (bCounterHash[arr1[i]]) {
        bCounterHash[arr1[i]] -= 1;
        result += arr1[i];
      };
    };
  }
  return result;
};

/*
Implement division (without using the divide operator, obviously).
*/

var iDivide = function(numerator, denominator) {
  var answer = 0;
  while (numerator >= denominator) {
    numerator -= denominator;
    answer++;
  }
  if (denominator > 0) alert("The answer is "+answer+"\nBut there's a remainder!!!!\nIt's "+numerator);
}

var recursiveDivide = function(numerator, denominator, count) {
  count || (count = 0);
  if (numerator >= denominator) {
    return recursiveDivide(numerator-denominator, denominator, count+1);
  } else {
    return count + " and your remainder is " + numerator;
  }
};


