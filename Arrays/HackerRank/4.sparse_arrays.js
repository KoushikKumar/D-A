//https://www.hackerrank.com/challenges/sparse-arrays

function processData(input) {
    let inputArr = input.split("\n");
    let noOfStrings = inputArr[0];
    let avaliableStrings = inputArr.slice(1,parseInt(noOfStrings)+1);
    let noOfQueries = inputArr[parseInt(noOfStrings) + 1];
    let availableQueries = inputArr.slice(parseInt(noOfStrings) + 2);
    let result = new Array(parseInt(noOfQueries)).fill(0);
    avaliableStrings.forEach((str) => {
        let index = availableQueries.indexOf(str);
        if(index > -1) {
            result[index] = result[index] + 1;
        }
    });
    availableQueries.forEach((query, index) => {
        var ind = availableQueries.indexOf(query);
        if(ind !== index && result[ind]!==0) {
            result[index] = result[ind];
        }
        console.log(result[index]);
    })
} 