function findSecondLargest(arr){
  if (arr.length<2){
    return "it should not contain less that two numbers"
  }
  let largest , secondLargest;
  if(arr[0]>arr[1]){
    largest=arr[0];
    secondLargest=arr[1];
  }
  else{
    largest=arr[1];
    secondLargest= arr[0];
  }
  for(let i=2;i<arr.length;i++){
    let current=arr[i];
    if(current>largest){
        secondLargest=largest;
        largest=current;
    }else if(current>secondLargest&&current!==largest){
        secondLargest=current;
    }}
    
    if (largest==secondLargest){
        return "no second largest"
    }
    return secondLargest;
  }
  console.log(findSecondLargest([2, 3, 4, 5]));

