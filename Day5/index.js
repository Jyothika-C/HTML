// let divElement=document.querySelector("#one");
// divElement.innerHTML="<h1> Hello world </h1>"

// let divElement2=document.querySelector("#two"); 
// divElement2.innerText="<h1> Hello world </h1>"

// *

// let pElement=document.createElement("p")
// pElement.style.color="red";
// pElement.style.backgroundColor="bisque";
// pElement.innerText="para1"

// let divElement=document.querySelector("#one");

// divElement.insertAdjacentElement("beforebegin",pElement);
//divElement.insertAdjacentElement("afterbegin",pElement);
//divElement.insertAdjacentElement("afterend",pElement);

// divElement.insertAdjacentElement("beforeend",pElement);

// let pElement2=document.createElement("p")
// pElement2.style.color="red";
// pElement2.style.backgroundColor="bisque";
// pElement2.innerText="para2"

// //let divElement=document.querySelector("#one");
// divElement.insertAdjacentElement("beforeend",pElement2);

//let button3=document.createElement("button")
//button3.style.color="red";
//button3.style.backgroundColor="bisque";
//button3.innerText="Button3"

//divElement.insertAdjacentElement("afterend",button3);

// let button4=document.createElement("button");
// button4.innerText="Button4";
// divElement.insertAdjacentelement("afterend",button4)

// let list1=document.createElement("li")
// list1.innerText="cherry"
// let listElement=document.querySelector("#one")
// console.dir(list1)
// listElement.insertAdjacentElement("beforeend",list1)


// let list2=document.createElement("li")
// list2.innerText="WaterMelon"
// //let listElement=document.querySelector("#one")
// console.dir(list2)
// listElement.insertAdjacentElement("afterbegin",list2)

// let list3=document.createElement("li")
// list3.innerText="Mango"
// //let listElement=document.querySelector("#one")
// console.dir(list3)
// let l=document.querySelectorAll("li")
// l[1].insertAdjacentElement("afterend",list3)

//// let appleElement=document.querySelectorAll("#one li")[1];
//// console.dir(appleElement.innerText);
//// console.dir(appleElement=document).createElement("li");
// //mangoelement.textContent="mango";
// //appleElement.insertAdjacentElement("aftetrend",mangoElement);

// function changeHeading(){
//     let h1Elem=document.querySelector("h1")
//     h1Elem.innerText="Hello"
// }

// let buttonElement=document.querySelector("button")
// console.dir(buttonElement)

// buttonElement.addEventListener("click",changeHeading)

// function changeTheme() {
//     let divElem = document.querySelector("div");

//     divElem.classList.toggle("dark-theme");
// }

// let buttonElement = document.querySelector("button");

// buttonElement.addEventListener("click", changeTheme);

// function say_hello(){
//      console.log("hello")
// }
// btnElements=document.querySelectorAll("button")
// for(let button of btnElements){
//     button.addEventListener("click",say_hello);
// }

// function changeHeading(e){
//     console.dir(e);
//     console.log(e.ctrlkey);
//     if(e.ctrlkey)
//     let h1Elem=document.querySelector("h1")
//     h1Elem=document.querySelector("button")
// }


// Hover and change the image
// let images = document.querySelectorAll(".img-style");

// images.forEach(function(img) {
//     img.addEventListener("click", function() {
//         if (img.src.includes("stuaart.jpg")) {
//             img.src = "stuart.jpg";
//         } else {
//             img.src = "stuaart.jpg";
//         }
//     });
// });

// function buyingTickets(jyo){
//     console.log(jyo.ctlkey);
//     if(jyo.ctlkey){
//         let h1Element=document.querySelector("h1");
//         h1Element.innerText="REady for MOVIe"
//     }
// }

// hover the cursor
// let images = document.querySelectorAll(".img-style");

// images.forEach(function(img) {
//     img.addEventListener("mouseover", function() {
//         img.style.transform = "scale(1.2)";
//         img.style.transition = "0.3s";
//     });

//     img.addEventListener("mouseout", function() {
//         img.style.transform = "scale(1)";
//     });
// });

function sum(e,a,b){
    console.log(a+b);
}
let btnElement=document.querySelector("button");

btnElement.addEventListener("click",(e)=>{
    sum(e,10,20);
});