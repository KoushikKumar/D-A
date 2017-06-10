//https://www.hackerrank.com/challenges/2d-array
function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

    var max = 0;
    for(var i=0; i<=3; i++) {
        for(var j=0; j<=3; j++) {
            let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if(sum > max) {
                max = sum;
            }
        }
    }
    console.log(max);
}