// let a = document.querySelector("div");
// console.log(a.getAttribute("id"));
// console.log(a.getAttribute("name"))

// let b = document.querySelector("p");
// console.log(b.getAttribute("class"));

// console.log(b.setAttribute("class","new-class"))

// let c = document.querySelector("div");
// console.log(c.style);
// console.log(c.style.backgroundColor);

// c.style.backgroundColor = "aqua";
// c.style.fontSize = "20px";
// c.innerText = "Hello My name is jay";

// let d = document.createElement("Button");
// d.innerText = "Click Me!";
// c.prepend(d);
// c.append(d);

// c.before(d);

// c.after(d);


// let e = document.querySelector("p");

// e.after(d);


// let f = document.createElement("h1");
// f.innerText = "Hello this is the heading inserted using js";
// let g = document.querySelector("body");

// g.prepend(f);

// let h = document.querySelector("p");
// h.remove();
// f.remove();


let i = document.querySelector("body");
let j = document.createElement("button");
j.innerText = "click me";
j.style.backgroundColor = "red";
j.style.color = "white";

i.prepend(j);

let k = document.querySelector("p");
// k.setAttribute("class","newclass");

// k.classList;

k.classList.add("newclass");
k.classList.remove("hiiiii");