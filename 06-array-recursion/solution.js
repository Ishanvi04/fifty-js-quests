function sumArray(arr , index=0){
    if(index >= arr.length){
        return 0;
    }
    return arr[index]+sumArray(arr,index+1);
    //function calling itself and that is recursion
     //Take current element at index and add it to the sum of the rest of the array
}
console.log(sumArray([1, 2, 7, 4]));  
console.log(sumArray([5, 2, 7]));