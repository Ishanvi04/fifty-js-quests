function palindrome(str){
    let original=str;
    let reverse="";
    for(let i=str.length-1;i>=0;i--){
        reverse += str[i];
    }
    if(str===reverse){
        console.log("is palindrome");
    }
    else {console.log("not palindrome");
}
}
palindrome("madam");
palindrome("ishanvi");