let snake = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
let minI = 0;
let minJ = 0;
let maxJ = snake[minI].length - 1;
let maxI = snake.length - 1;

while(minI < snake.length && minJ< snake[minI].length && maxI>=0 && maxJ>=0 ) {
    for(let i=minI,j=minJ; j< maxJ + 1; j++ ) {
        console.log(snake[i][j]);
    }
    for(let i = minI+1, j=maxJ ; i < maxI+1 ; i++) {
        console.log(snake[i][j]);
    }
    for(let i= maxI, j=maxJ-1; j>=minJ; j--) {
        console.log(snake[i][j]);
    }
    for(let i= maxI-1, j = minJ; i >= minI+1; i--) {
        console.log(snake[i][j]);
    }
    minI++;
    minJ++;
    maxI--;
    maxJ--;
}