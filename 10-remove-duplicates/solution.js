function removeDuplicates(arr){
    let result= [] //to store values of array
    for(let i=0;i<arr.length;i++){
        let isDuplicate = false;
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
              isDuplicate = true;
              break; // No need to check further
            }
          }
          if (!isDuplicate) {
            result[i] = arr[i]; 
    }
}
    return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));