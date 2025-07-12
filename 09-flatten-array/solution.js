function flattenArray(arr){
    let result = []; // This will store the final flattened array
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i]; // Get the current item
        if (Array.isArray(current)) {
            // If the item is an array, recursively flatten it and add to result
            result = result.concat(flattenArray(current));//concat merges and forms one array
          } else {
            // If it's not an array, just add it to result
            result = result.concat(current);  
          }
        }
      
        return result;
      }
      const arrayy = [1, [2, 3], [4, [5, 6]], 7];
console.log(flattenArray(arrayy));
      
