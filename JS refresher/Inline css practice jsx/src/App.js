
import './App.css';

import React from "react";
function App() {
  const fname = "Amit";
  const Lname = "Manore";
  const background = {
    color : "red"
  }
  const t = new Date;
  let greet;
  console.log(t.getHours());
  if(t>12 && t<18){
   greet = "good aftrenoon"; 
   background.color = "green" 
  }
  else if(t>18 && t<24){
    greet = "good evening"
    background.color = "blue" 
  }
  else{
    greet = "good  morning";
  }
  return (

  
        <div className='bg'>
           <h1 style={background}> {greet}</h1>

        </div>
    

  );
}

export default App;
