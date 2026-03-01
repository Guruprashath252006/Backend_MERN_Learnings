//1

const cars=['Volvo','BMW','audi','tata']
let n=cars.length

for (let i=0;i<n;i++){
    console.log(cars[i])

}

//2

function isprime(num){
    if (num <= 1){
        return false;
    }
    for (let i = 2; i * i <= num; i++){
        if(num % i ===0){
        return false;
        }
    }
    return true;
}


//3

for (let i = 3; i <= 29; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//4

let n = 5;
for (let i = 1; i <= n; i++) { 
  let row = "";
  for (let j = 1; j <= i; j++) { 
    row += "* ";
  }
  console.log(row);
}


//5

for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}


// task 8

// 1. Square
const size = 5;
for (let i = 0; i < size; i++) {
  console.log("* ".repeat(size));
}

// 2. Rectangle
const rowsRect = 3, colsRect = 10;
for (let i = 0; i < rowsRect; i++) {
  console.log("* ".repeat(colsRect));
}

// 3. Right triangle
const n = 5;
for (let i = 1; i <= n; i++) {
  console.log("* ".repeat(i));
}

// 4. Left triangle (Right-aligned)
const nLT = 5;
for (let i = 1; i <= nLT; i++) {
  console.log("  ".repeat(nLT - i) + "* ".repeat(i));
}

// 5. Inverted triangle
const nIT = 5;
for (let i = nIT; i >= 1; i--) {
  console.log("* ".repeat(i));
}

// 6. Pyramid
const nP = 5;
for (let i = 1; i <= nP; i++) {
  console.log(" ".repeat(nP - i) + "* ".repeat(i));
}

// 7. Inverted pyramid
const nIP = 5;
for (let i = nIP; i >= 1; i--) {
  console.log(" ".repeat(nIP - i) + "* ".repeat(i));
}

// 8. Diamond
const nD = 5;
for (let i = 1; i <= nD; i++) {
  console.log(" ".repeat(nD - i) + "* ".repeat(i));
}
for (let i = nD - 1; i >= 1; i--) {
  console.log(" ".repeat(nD - i) + "* ".repeat(i));
}

// 9. Hollow square
const sHS = 5;
for (let i = 0; i < sHS; i++) {
  if (i === 0 || i === sHS - 1) {
    console.log("* ".repeat(sHS));
  } else {
    console.log("* " + "  ".repeat(sHS - 2) + "*");
  }
}

// 10. Hollow triangle
const nHT = 5;
for (let i = 1; i <= nHT; i++) {
  if (i === 1 || i === nHT) {
    console.log("* ".repeat(i));
  } else {
    console.log("* " + "  ".repeat(i - 2) + "*");
  }
}


