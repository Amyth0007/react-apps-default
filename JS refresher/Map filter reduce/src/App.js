

import React from "react";
// import ContactArray from './ContactArray';
var number = [ 3 , 34,76 ,34, 12,11];
  
//Map - creating a new array by doing something with each item in an array

function double(num){
  return num*2;
}

const nnum = number.map(double);
console.log(nnum);


const nnum1 = number.map(function (num1){
  return num1*2;
})
console.log(nnum1);





function App() {
  return (

<>
<h1>hwllo there</h1>
</>
  );
}

export default App;
