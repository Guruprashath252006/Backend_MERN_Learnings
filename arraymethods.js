
let cart=[]
cart.push("apple", "banana", "orange");
let removeditem = cart.pop();
console.log(cart);
console.log(removeditem);

//2

let arr = [10,20,30,40]
arr.shift();
arr.unshift(5);
console.log(arr);

//3
let skills=['HTML','CSS','JS','React']
skills.includes('react')
console.log(skills);


//4
let arr1=[1,2,3,4,5]
let sliced = arr1.slice(0,4);
console.log(sliced);


//5
let spliced=arr1.splice(2,2)
console.log(spliced);

//6
let arr2=[1,2]
let arr3=[3,4]
let concatenated = arr2.concat(arr3);
console.log(concatenated);

//7
let arr5=["JS", "React", "Node"]
let joined= arr.join("-");
console.log(joined);

//8
let arr6=[23,543,789,2424,4362];
let asceending = arr6.sort((a,b)=>a-b);
console.log(asceending);

let descending = arr6.sort((a,b)=>b-a);
console.log(descending);

//9
let arr7 = [1, 2, 3, 4, 5];
arr7.reverse();   
console.log(arr7);

//10
let arr8 = [10, 20, 30, 40, 50];

let valueToFind = 30;

let index = arr8.indexOf(valueToFind);

if (index !== -1) {
  console.log("Index:", index);
} else {
  console.log("Not Found");
}


//11
let multiplied = arr7.map((num) => num * 5);
console.log(multiplied);

//12
let users = [
  { name: "Sudhan", age: 22 },
  { name: "Ravi", age: 25 }
];
let names= users.map((user => user.name));
console.log(names);

//13
let Given = [10, 15, 20, 25, 30];
let filtered = Given.filter((num)=> num>20);
console.log(filtered);

//14
let products = [
  { name: "Laptop", price: 55000 },
  { name: "Mouse", price: 500 },
  { name: "Phone", price: 15000 },
  { name: "Keyboard", price: 2000 }
];

let expensiveProducts = products.filter(product => product.price > 10000);

console.log(expensiveProducts);

//15
let numbers = [100, 200, 300];

let total = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(total);

//16
let products = [
  { name: "Mobile", price: 10000 },
  { name: "Laptop", price: 50000 },
  { name: "Headset", price: 2000 }
];

let names = products.map(product => product.name);
console.log(names);

let totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);

let hasCheapProduct = products.some(product => product.price < 3000);
console.log(hasCheapProduct);


//17

let marks = [85, 72, 90, 33, 67, 40];
let above70 = marks.filter(mark => mark > 70);
console.log(above70);

let allPassed = marks.every(mark => mark >= 35);
console.log(allPassed);

let firstFailed = marks.find(mark => mark < 35);
console.log(firstFailed);

let total = marks.reduce((acc, mark) => acc + mark, 0);
let average = total / marks.length;

console.log(average);

//18
let arr = [1, 2, 2, 3, 4, 4, 5];

let unique = arr.filter((value, index, self) => 
  self.indexOf(value) === index
);

console.log(unique);

//19
let groupedByAge = users.reduce((acc, user) => {
  if (!acc[user.age]) {
    acc[user.age] = [];
  }
  acc[user.age].push(user);
  return acc;
}, {});

console.log(groupedByAge);

//20

let arr = [[1,2], [3,4], [5]];

let flatArray = arr.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);

console.log(flatArray);