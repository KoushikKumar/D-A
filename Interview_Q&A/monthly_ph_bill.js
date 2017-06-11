// Monthly Phone bill

function solution(S) {
    if(S.indexOf("\n") < 0) {
        return 0;    
    }
    let allCalls = S.split("\n"); 
    let max = {
        
    };
    let totalBill = 0;
    let maxTime = 0;
    let maxCalls = [];
    allCalls.forEach(call => {
        let callDetails = call.split(',');
        let callDurationArr = callDetails[0].split(":");
        let callDuration = (60 * 60 * parseInt(callDurationArr[0])) + (60 * parseInt(callDurationArr[1])) +( parseInt(callDurationArr[2]));
        let phNum = parseInt(callDetails[1].split("-").join(""));
        if(callDuration < 300) {
            totalBill = totalBill + (callDuration * 3);
        } else {
            totalBill = totalBill + (Math.ceil(callDuration/60) * 150);
        }
        if(max[phNum]) {
            max[phNum]["calls"].push(callDuration);
        } else {
            max[phNum] = {};
            max[phNum]["calls"] = [];
            max[phNum]["calls"].push(callDuration);
        }
        let totalDuration = max[phNum]["calls"].reduce((prev, next) => {
           return  prev+next;
        },0);
        if(totalDuration === maxTime) {
            maxCalls.push(phNum);
        } else if(totalDuration > maxTime) {
            maxTime = totalDuration;
            maxCalls = [phNum];
        }
    })
    let shortestPhNum = Math.min.apply(null, maxCalls);
    let shortestPhNumCalls = max[shortestPhNum]["calls"];
    shortestPhNumCalls.forEach((callDuration) => {
        if(callDuration < 300) {
            totalBill = totalBill - (callDuration * 3);
        } else {
            totalBill = totalBill - (Math.ceil(callDuration/60) * 150);
        }
    })
    
    return totalBill;
}