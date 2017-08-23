/*

*
**
***
****
*****

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
    for(let s = ''; s.length <= soDong; s += '*') console.log(s);
}

veHinh2(5);