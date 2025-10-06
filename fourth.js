let a = [10,20,30,40,50];
// console.log(a);

// console.log(typeof a);
// console.log(a.length);
// console.log(a[0]);
// console.log(a[100]);
// a[2] = 100;
// console.log(a);

// for(let i = 0;i<a.length;i++){
//     console.log(a[i]);
// }
// console.log('\n')
// for(let b of a){
//     console.log(b);
// }

// let sum = 0;

// for(let i of a){
//     sum+=i;
// }
// console.log(`Average = ${sum/a.length}`);

// for(let i of a){
//     i = i - i*0.1;
//     console.log(i); 
// }

// a.push(2000);
// for(let i of a ){
//     console.log(i);
// }

// let c = a.pop();
// console.log(c);
// console.log("\n");
// console.log(a);

// console.log(a.toString());

// let d = [1,2,3,4,,5];
// console.log(a.concat(d));

// let e = ["jay","tanmay","rahul","riyanshi"];

// console.log(a.concat(d,e));

// let f = a.shift();
// console.log(f);

// let g = a.unshift("Jay");
// console.log(a);

// console.log(a.slice(1,1));


// a.splice(2,0,101);
// console.log(a);
// a.splice(2,1);
// console.log(a);
// a.splice(2,2,101,110);
// console.log(a);


let x = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

x.shift();
console.log(x);

x.splice(1,1,"Ola");
console.log(x);
x.push("Amazon");
console.log(x);