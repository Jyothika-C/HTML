// let a=10
// const b="Hello"

// console.log(a)
// console.log(b)

// a="helloo"
// console.log(a)
// var a="thor";
// console.log(a);
// //let a=56; not possible
// a="hello"; //possible

let a;
let b=null;

let firstName="thor"; // camelCase
let lastName='Tony'
let age=21
let fullName=`tony star ${age}`


console.log(firstName[1]);
console.log(lastName[1]);
console.log(fullName);

let arr1=["a","b","c"];
arr1[10]="Hello"
console.log(arr1);

//object literals*
let avenger1={
    name:"Tony",
    age:45,
    isAvenger:true,
}
console.log(avenger1["age"])

let avenger2=  [{
    name:"Tony",
    alias:"Iron Man",
    age:45,
    email:"tony@starkindustries.com"
    
},
{
    name:"Steve Rogers",
    alias:"Captian America",
    age:101,
    email:"steve@avengers.com",
}
]
console.log(avengers2[1][email])
