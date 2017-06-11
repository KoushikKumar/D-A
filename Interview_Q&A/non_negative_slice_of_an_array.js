//Returns maximum sum of any non negative slice of an array
function solution(A) {
    let maxSum = -1;
    let len = A.length;
    let currentSum = -1;
    
    if(len <= 0) {
        return maxSum;   
    }
    
    for(let i=0; i<len; i++) {
        let currentVal = A[i];
        if(currentVal >= 0) {
            if(currentSum > -1) {
              currentSum = currentSum + currentVal;
            } else {
                currentSum = currentVal;
            } 
        } else {
            if(currentSum>=0 && currentSum > maxSum) {
                maxSum = currentSum;
            }
            if(currentSum !== -1) {
                currentSum = 0;
            }
        }
    }
    if(currentSum>=0 &&  currentSum > maxSum) {
        maxSum = currentSum;
    }
    
    return maxSum;
}