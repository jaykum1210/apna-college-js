// let a = document.querySelector("#div1");
// a.onmouseover= console.log("Hellohii");

// let num = 1;
// let b = document.querySelector("#but1");
// b.onclick = (evt) => {
    // console.log("Clicked");
    // console.log(`clicked ${num} times`);
    // num++;
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY)
// };

// let c = document.querySelector("#but2");
// c.ondblclick = () => {
//     console.log("double click");
// };

// let d = document.querySelector("#div1");
// d.onmouseover = () => {
//     console.log("Hover");
// }

// let e = document.querySelector("#but2");
// e.addEventListener("click", (evt) => {
//     console.log("Hiil");
// });

// let f = document.querySelector("body");

// e.addEventListener("click", (evt) => {
//     f.style.backgroundColor = "red";
// });

// const g = () => {
//     console.log("Done");
// }
// e.addEventListener("click",(g));

// e.removeEventListener("click",(g));


let h = document.querySelector("#mode");
let i = "light";
h.addEventListener("click" , () => {
    if(i==="light"){
        i = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
    }
    else{
        i = "light";
        j = document.querySelector("body");
        j.style.backgroundColor = "white";
        j.style.color = "black";
    }
});