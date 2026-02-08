function multiplyByThree(arr){
    let multiplyed =[]
    for(let i = 0; i < arr.length; i++){
        multiplyed.push(arr[i]*3);
    }
    return multiplyed;
}

console.log(multiplyByThree([1, 2, 3]));
