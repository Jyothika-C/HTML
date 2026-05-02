//Ashynchronous------->
// console.log("This is line1");
// setTimeout(()=>{
//     console.log("This is Line2");
// },5000);
// console.log("This is Line3");

// let arr1=[1,2,3,4,5]
// let arr2=(arr1)=>{
//     let a=[]
//     for (let i in arr1){
//         a.push(arr1[i]*10)
//     }
//     return a
// }
// console.log(arr2(arr1))


//Usng the Math function
// let arr1=[1,2,3,4,5]
// arr3=arr1.map((a)=>{
//     return a*10;
// });
// console.log(arr3);
// let arr2=[10,20,30,40,50]

// filter even numbers

// let arr1=[1,2,3,4,5]
// arr3=arr1.filter((a)=>{
//     return a%2==0;
// });
// console.log(arr3);
// let arr2=[10,20,30,40,50]

//Spread operator
// let arr1=["a","b","c"]
// let arr2=["d","e","f"]
// let arr3=[...arr1,...arr2];
// console.log(arr3);

//Dictonary 
let teamIronman={
    name1:"Spider Man",
    name2:"IronMan"
}
let teamCaptian={
    name3:"Captian America",
    name4:"Natasha"
}//to add new name 


let avengers={...teamIronman,...teamCaptian,name5:"Black panther"};
console.log(teamCaptian);



   
