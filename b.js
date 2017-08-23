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
            if (j <= i) s += '*';
        }
        console.log(s);
    }
}

function veHinh2(soDong) {
    for(let i = 1; i <= soDong; i++ ) {
        let s = '';
        for(let j = 1; j <= soDong; j++ ) {
            s += (i + j >= soDong + 1) ? '*' : ' ';
        }
        console.log(s);
    }
}

veHinh2(5);

/*
    *
   ***
  *****
 *******

 soDong = 4 
*/

function veHinh3(soDong) {
    
}