// // function Declaration
// // traditional 
// function sum(a,b){
//     let c=a+b;
//     return c;
// }
// const ans1=sum(5,6);
// console.log(ans1);

// // function expression
// const sum1=function(a,b){
//     let c=a+b;
//     return c;
// }
// const ans2=sum(5,6);
// console.log(ans2);


//  arrow function
// const sum2=(a,b)=>{
//     let  c=a+b;
//     return c;
// }
// const ans3=sum2(5,6);
// console.log(ans3)

const even=(a)=>{
    lst=[]
    for (let i in a){
        if (i%2==0){
            lst.push(i)
        }
    }
    return lst
}
const ans=even([1,2,3,4,5,6,7,8,9])
console.log(ans)