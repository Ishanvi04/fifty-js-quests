function capitalize(str) {
  const arr = str.split(' '); // Split into words using space

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    //arr[i][0] : gets the first character

    // .toUpperCase() :capitalizes the first letter
    
    // arr[i].slice(1) : gets the rest of the word
    
    // .toLowerCase() : makes the rest lowercase
  }

  return arr.join(' ');

  // arr.join(' ') : joins it all back into one sentence
}

console.log(capitalize("i am the best"));
