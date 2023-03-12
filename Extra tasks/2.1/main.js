function continuousArr(arr){
    let maxSum = 0;
    let currentSum = 0;
    for(let el of arr){
        currentSum += el;
        if(currentSum > maxSum) {
            maxSum = currentSum;
        }
        if(currentSum < 0) currentSum = 0;
    }
    return maxSum;
}
console.log(continuousArr([-2,1,-3,4,-1,2,1,-5,4]));
console.log(continuousArr([5,-6,8,1,-2,-3,12]));