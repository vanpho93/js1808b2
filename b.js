/*

*
**
***
****
*****

    *
   **
  ***
 ****
*****

i la so Dong
j la so cot
1 - 5
2 - 4
3 - 2 

i + j >= soDong + 1
*/

function veHinh1(soDong) {
    for(let i = 1; i <= soDong; i++ ) {
        let s = '';
        for(let j = 1; j <= soDong; j++ ) {
            // if (j <= i) s += '*';
            const dieuKien = j <= i;
            s += dieuKien ? '*' : ' ';
        }
        console.log(s);
    }
}

function veHinh2(soDong) {
    for(let i = 1; i <= soDong; i++ ) {
        let s = '';
        for(let j = 1; j <= soDong; j++ ) {
            const dieuKien = i + j >= soDong + 1;
            s += dieuKien ? '*' : ' ';
        }
        console.log(s);
    }
}



// veHinh(5, (i, j) => i >= j);
// veHinh(5, (i, j, n) => i + j >= n + 1);

// veHinh2(5);

/*
    *
   ***
  *****
 *******
dong 1 -> khoang cach <= 0
dong 2 -> khoang cach <= 1
dong 3 -> khoang cach <= 2
dong 4 -> khoang cach <= 3

|j - soDong| <= i - 1
 soDong = 4 
*/

/*
    *
   ***
  *****
 *******
  *****
   ***
    *
 soDong = 7 (soDong luon % 2 = 1)
*/

function veHinh3(soDong) {
    for(let i = 1; i <= soDong; i++ ) {
        let s = '';
        const soCot = soDong * 2 - 1;
        for(let j = 1; j <= soCot; j++ ) {
            const dieuKien = Math.abs(j - soDong) <= i - 1;
            s += dieuKien ? '*' : ' ';
        }
        console.log(s);
    }
}

function veHinh(soDong, checkPoint, getSoCot) {
    for(let i = 1; i <= soDong; i++ ) {
        let s = '';
        const soCot = !getSoCot ? soDong : getSoCot(soDong);
        for(let j = 1; j <= soCot; j++ ) {
            const dieuKien = checkPoint(i, j, soDong);
            s += dieuKien ? '*' : ' ';
        }
        console.log(s);
    }
}

veHinh(5, (i, j) => j <= i);
veHinh(5, (i, j, n) => i + j >= n + 1);
veHinh(5, (i, j, n) => Math.abs(j - n) <= i - 1, soDong => soDong * 2 - 1);