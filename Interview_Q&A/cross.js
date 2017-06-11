
//i: row number(starts from 1)
//j: column number(starts from 1)
function cross(i, j) {
    var a = [new Array(4).fill("*"),new Array(4).fill("*"), new Array(4).fill("*"), new Array(4).fill("*")];
    for(let x=i-1, y=j-1; x>=0 && y>=0; x--,y--) {
        a[x][y] = "x";
    }
    if(i< a.length && j < a.length) {
        for(let x=i, y=j; x < a.length && y < a.length; x++,y++) {
            a[x][y] = "x";
        }
    }
    if(i < a.length && j-2 > -1) {
        for(let x=i, y=j-2; x < a.length && y>=0; x++,y--) {
            a[x][y] = "x";
        }
    }
    if(i-2 > -1 &&  j < a.length) {
        for(let x=i-2, y=j; y < a.length && x>=0; x--,y++) {
            a[x][y] = "x";
        }
    }
    a.forEach(arr => console.log(arr));
}

cross(1,1);



