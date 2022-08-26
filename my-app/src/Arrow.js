
import React from 'react'

// import ContactArray from './ContactArray';
var number = [ 3 , 34,76 ,34, 12,11];
  
//Map - creating a new array by doing something with each item in an array

// function double(num){
//   return num*2;
// }

const nnum1 = number.map(function (num1){
  return num1*2;
})
console.log(nnum1);

const nnum = number.map(x=> x*x);
console.log(nnum);

const nnum2 = number.map((x) => { 
    return x*x});
console.log(nnum2);
// const y =2;
// const nnum3 = number.map((x,y)=>{ x*y});
// console.log(nnum3);
function Arrow() {
    return (
    <div>Arrow</div>
  )
}

export default Arrow