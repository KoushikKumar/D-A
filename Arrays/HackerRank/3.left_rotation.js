//https://www.hackerrank.com/challenges/array-left-rotation
function processData(input) {
    let arr = input.split("\n");
    let len = arr[0].split(" ")[0];
    let numOfRotations = arr[0].split(" ")[1];
    let numOfRotations_right = 0;
    let numOfRotations_left = 0;
    if(len > numOfRotations) {
        if(len-numOfRotations >= numOfRotations) {
            numOfRotations_left = numOfRotations;
        } else {
            numOfRotations_right = len - numOfRotations;
        }
    } else {
        let mod = numOfRotations%len;
        if(len-mod >= mod) {
            numOfRotations_right = mod;
        } else {
            numOfRotations_left = len-mod; 
        }
    }
    let inputArr = arr[1].split(" ");
    if(numOfRotations_left > 0) {
        for(let i=0; i<numOfRotations_left; i++) {
            let x = inputArr[0];
            inputArr.splice(0,1);
            inputArr.push(x);
        }
    } else {
        for(let i=0; i<numOfRotations_right; i++) {
            let y = inputArr.pop();
            inputArr.unshift(y);
        }
    }
    
    console.log(inputArr.join(" "));
} 