// function first(){
//     console.log("Hello");
//     console.log("My name is Jay Kumawat");
// }

// first();

// function second(msg){
//     console.log(msg);
// }
// second(100);

// function sum(a,b){
//     console.log(`sum of ${a} + ${b} = ${a+b}`);
// }
// sum(10,20);

// const sum = (a,b) => {
//     return a+b;
// }
// console.log(sum(10,20));
// console.log(typeof sum);

// const mul = (a,b) =>{
//     return a*b;
// }
// console.log(mul(10,20));

// const hel = () => {
//     console.log("Hello");
// }

// hel();


// let count = 0;
// function find(b){
//     for(let i of b){
//         if(i=='a'||i=='e'||i=='o'||i=='u'||i=='i'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(find("Hello"));


// let count = 0;
// let c = (b)=>{
//     for(let i of b){
//         if(i=='a'||i=='e'||i=='o'||i=='u'||i=='i'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(c("Helloo"));

// let d = [1,2,3,4,5];
// d.forEach(function print(val){
//     console.log(val);
// });

// sum=0;
// d.forEach(function sumval(i){
//     sum+=i;
// });
// console.log(sum);

// let mul = 1;
// d.forEach((i) => {
//     mul*=i;
// })
// console.log(mul);

// let squ = (num) =>{
//     console.log(num*num);
// }
// d.forEach(squ);

// d.map((i)=>{
//     console.log(i);
// })

// let e = (num)=>{
//     console.log(num+100);
// }

// d.map((e));

// let f = d.map((i)=>{
//     return i*i;
// });
// console.log(f);
// console.log(d);


// let x = [1,2,3,4,5,6,7];
// let y = x.filter((i)=>{
//     return i%2==0;
// });
// console.log(y);

// let output = x.reduce((a,i)=>{
//     return a+i;
// });
// console.log(output);


// let min = x.reduce((a,i)=>{
//     return a<i?a:i;
// });
// console.log(min);

// let marks = [10,20,30,40,91,99,100];
// let up = marks.filter((i)=>{
//     return i>90;
// })
// console.log(up);

let num = Number(prompt("Enter number of elements = "));
let arr = [];
for(let i =0;i<num;i++){
    arr[i] = Number(prompt(`Enter number ${i+1}`));
}
console.log(arr);

let sum = arr.reduce((sumval,i)=>{
    return sumval+i;
})
console.log(sum);

let mul = arr.reduce((mulval,i)=>{
    return mulval*i;
})
console.log(mul);