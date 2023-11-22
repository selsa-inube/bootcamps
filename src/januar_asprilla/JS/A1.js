
console.log("//Looping a triangle//"){
    for (let i = 1; i <= 7; i++) {
        let asterisco = '';
        for (let a = 1; a = 7; a++) {
            asterisco += '#';
        }
        console.log(asterisco);
    }
}
console.log("//FizzBuzz//")

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.log("//Chessboard//")



for (let i = 1; i <= 8; i++){
    let  asteristo = '';
    let espacios = '';
    for (let b = 1; b <= 8; b++) {
        asteristo += '#';
        espacios += '';
        for (let c = 1; c <= 8; c++) {
            espacios += '';
            asteristo += '#';
        }
    }
}