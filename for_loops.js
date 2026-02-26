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


