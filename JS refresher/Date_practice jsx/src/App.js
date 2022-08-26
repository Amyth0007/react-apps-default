
import './App.css';

import React from "react";
function App() {
  const fname = "Amit";
  const Lname = "Manore";
  const d = new Date();

  return (

    <>
    <div className='center'>
      <h1>Hello {fname +" "+ Lname}</h1>
       <h3 id='jsx'> Current date is {d.getDate()}</h3>
       <h3 id='jsx'> Current date is {d.getHours()+ " : "+ d.getMinutes()+ " : "+ d.getSeconds()}</h3>
 <h4>the app is created by {fname}</h4>      {/* <button onClick={randomno()} ></button> */}
 <h4>Copyrights {d.getFullYear()}</h4>      {/* <button onClick={randomno()} ></button> */}
      </div>
    </>

  );
}

export default App;
