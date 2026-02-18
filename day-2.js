//1
var Name='Guru';
let age = 18;
const Student="true";

console.log(Name);
console.log(age);
console.log(Student);

//2
let a;
console.log(a); // it will show undefined as we didnt initialize any value to the var

let b=null;
console.log(b); // it will print null as we initialized null.

let str ="Hello";
let num =25;
let bool=true;
let int= 123456789;
let bigint= 12345678987654321n;
let c=null;
let a;

onsole.log(typeof str);         // string
console.log(typeof num);         // number
console.log(typeof bool);
console.log(typeof int);         // boolean
console.log(typeof bigint);         // bigint
console.log(typeof c);       // object (special case)
console.log(typeof a);

//4

let a =10;
let b = "Hello";
console.log(a*2); // 20
console.log(b*2); // Nan

//5
studentName 
StudentName
student_name
student-name

//6
let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.33
console.log(x % y); // 1

//7
let n = 10;
n += 5;
console.log(n); // 15
n -= 3;
console.log(n); // 12
n *= 2;
console.log(n); // 24
n /= 4;
console.log(n); // 6


//8
console.log(10 == "10");   // true
console.log(10 === "10");  // false
console.log(10 != "10");   // false
console.log(10 !== "10");  // true

//9
let age=19;
let hasID=true;
if(age>18 && hasId){
    console.log("Eligible")
}
else if(age<18 || !hasID){
    console.log("Not Eligible");
}
else{
    console.log("Not Eligible")
}

//10
var a;
console.log(a);   // undefined

a = 5;
console.log(a);   // 5

console.log(typeof NaN);   // number
console.log(typeof null);  // object

