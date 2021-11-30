// mang ban dau
let matrix = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// cap n matrix
const n = 3;

// mang nhap dung de tinh toan cho trang thai tiep theo cua matrix
let matrixTemp = [...matrix];

// cho xoay matrix 5 lan
for (let j = 0; j < 5; j++) {
    // bien phu dung de in cac phan tu trong cung 1 dong
    let inline = [];

    // thu tu dong dang duoc duyet
    sameLine = 0;

    // vong lap de in mang ra cho de quan sat
    for (let i = 0; i < matrixTemp.length; i++) {
        if (Math.floor(i / n) == sameLine) {
            inline.push(matrixTemp[i]);
        }
        else {
            inline = [];
            sameLine++;
            inline.push(matrixTemp[i]);
        }
        if (inline.length == n) {
            console.log(...inline);
        }
    }
    console.log("\n");

    // vong lap tinh toan trang thai tiep theo
    for (let i = 0; i < matrix.length; i++) {
        let x = n - Math.floor(i / n);
        let y = i % n;
        let indexNew = y * n + x - 1;
        matrixTemp[indexNew] = matrix[i];
    }
    matrix = [...matrixTemp];
}