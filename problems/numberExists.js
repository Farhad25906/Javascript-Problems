function numberExists(arr, value) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return true; 
        }
    }
    return false; 
}

console.log(numberExists([5, 8, 10], 8)); 
console.log(numberExists([5, 8, 10], 4)); 
