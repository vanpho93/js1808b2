// 1...100

// in ra cac so chia het cho 2 
// in ra cac so chia het cho 3 
// in ra cac so chia cho 5 du 1 
// in ra cac so chinh phuong -> x => Math.sqrt(x) % 1

function inSoChiaHetCho2() {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = (i % 2 === 0);
        if (dieuKien) console.log(i);
    }
}

function inSoChiaHetCho3() {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = (i % 3 === 0);
        if (dieuKien) console.log(i);
    }
}

function inSoChia5Du1() {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = (i % 5 === 1);
        if (dieuKien) console.log(i);
    }
}

function inSoChinhPhuong() {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = (Math.sqrt(i) % 1 === 0);
        if (dieuKien) console.log(i);
    }
}
