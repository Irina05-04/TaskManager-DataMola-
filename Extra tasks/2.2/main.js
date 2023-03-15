function broker(arr){
    if(!Array.isArray(arr)) return false;
    if(arr.length < 1 || arr.length > Math.pow(3*10,4)) throw new Error('массив не удовлетворяет условию');
    let sum = 0;
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] < 1 || arr[i] > Math.pow(10,4)) throw new Error(`элемент ${arr[i]} не удовлетворяет условию`);
        if(arr[i]<arr[i+1])
        sum += arr[i+1] - arr[i];
    }
    return sum;
}
console.log(broker([7,1,5,3,6,4])); //7
console.log(broker([7,2,1,5,3,8])); //9
console.log(broker([1,2,1,5,3,8])); //10
console.log(broker([1,2,3,4,5]));  //4
console.log(broker([7,6,4,3,1]));  //0
console.log(broker([7])); //0