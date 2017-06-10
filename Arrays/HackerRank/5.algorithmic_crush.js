//https://www.hackerrank.com/challenges/crush

function processData(input) {
    let inputArr = input.split("\n");
    let noOfElements = parseInt(inputArr[0].split(" ")[0]);
    let noOfQueries = parseInt(inputArr[0].split(" ")[1]);
    
    let arr = new Array(noOfElements).fill(0);
    for(let x =1; x<=noOfQueries ; x++) {
        let query = inputArr[x];
        let queryArr = query.split(" ");
        let i = parseInt(queryArr[0]);
        let j = parseInt(queryArr[1]);
        let inc = parseInt(queryArr[2]);
        arr[i-1] = arr[i-1] + inc;
        if(j<=noOfElements-1) {
            arr[j] = arr[j] - inc;
        }
    }
    let max = 0 ; 
    let totalSum = 0;
    //Do prefixsum
    arr.forEach((num, index) => {
        totalSum = totalSum + num;
        if(totalSum > max) {
           max = totalSum;
        }
    })
    console.log(max);
} 