// number of elevator stops

function solution(A, B, M, X, Y) {
    // write your code in JavaScript (Node.js 6.4.0)
    
    let indexOfA = 0;
    let totalStops = 0;
    let lengthOfA = A.length;
    while(indexOfA < lengthOfA){
        let stops = [];
        let stopsLength = 0;
        let currentWeight = 0;
        let currentNoOfPersons = 0;
        let maxI = 0
        if(indexOfA+X >= lengthOfA) {
            maxI = lengthOfA;
        } else {
            maxI = indexOfA+X;
        }
        
        for(var i = indexOfA ; i< maxI ; i++) {
            let weight = A[i];
            let stop = B[i];
            if(currentWeight + weight <= Y && currentNoOfPersons+1<= X) {
                currentWeight = currentWeight + weight;
                currentNoOfPersons = currentNoOfPersons +1;
                if(stops.indexOf(stop) < 0){
                    stops.push(stop);
                    stopsLength = stopsLength+1;
                }
            } else {
                indexOfA = i;
                totalStops = totalStops + stopsLength + 1;
                break;
            }
            if(i+1 == maxI) {
                indexOfA = i + 1;
                totalStops = totalStops + stopsLength + 1;
            }
        }
    }
    
    return totalStops;
}