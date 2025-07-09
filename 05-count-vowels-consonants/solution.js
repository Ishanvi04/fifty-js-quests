function countLetters(str) {
    let vowel = 0;
    let consonant = 0;
    const vowels = "aeiou";
  
    // Convert input to lowercase
    str = str.toLowerCase();
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
      // Check if it's a letter (a-z)
      if (char >= 'a' && char <= 'z') {
        if (vowels.includes(char)) {
          vowel++;
        } else {
          consonant++;
        }
      }
    }
  
    console.log("Vowels:", vowel);
    console.log("Consonants:", consonant);
  }
  
  countLetters("I am the Best");
  