function countLetters(str){
    const freq={};
    str = str.toLowerCase()
    let count = 0;
    for(let i=0;i<str.length;i++){
        const char = str[i];
        // skip non-alphabet characters
        if (char >= 'a' && char <= 'z') {
            if (freq[char]) {
                freq[char]++; // if already in object, increment
            } else {
                freq[char] = 1; // if not, set to 1
            }
        }
    }

    return freq;
}
console.log(countLetters("i am the best"));

    