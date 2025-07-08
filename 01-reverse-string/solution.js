// Method 1: Using built-in functions
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(ReverseString("I am the Best"));
  
  // Method 2: without using built-in functions
  function reverseaString(str) {
    let reverse = ""; //starting with an empty string for stpring the reversed
    for (let i = str.length - 1; i >= 0; i--) { //starting from the last character
      reverse += str[i];//Adding each character to the reverse string one by one from the end
    }
    return reverse;//final result
  }
  console.log( reverseaString("I am the Best"));
  