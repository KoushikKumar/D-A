//https://www.hackerrank.com/challenges/dynamic-array
function processData(input) {
    let inputArr = input.split("\n");
    let N = parseInt(inputArr[0].split(" ")[0]);
    let Q = parseInt(inputArr[0].split(" ")[1]);
    let seq = [];
    let lstAns = 0;
    for(let i =1; i<=Q;i++){
        var wxy = inputArr[i].split(" ");
        let w = parseInt(wxy[0]);
        let x = parseInt(wxy[1]);
        let y = parseInt(wxy[2]);
        
        if(w===1){
            let xor = (x^lstAns)%N;
            if(Array.isArray(seq[xor])){
                seq[xor].push(y);
            } else {
                seq[xor] = [y];
            }
        } else if(w===2) {
            let xor = (x^lstAns)%N;
            let seqArr = seq[xor];
            if(Array.isArray(seqArr) && seqArr.length > 0) {
                let mod = y%(seqArr.length);
                lstAns = seqArr[mod];
                console.log(lstAns);
            }
        }
    }
} 