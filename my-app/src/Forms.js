
// import './App.css';
// import cont from './ContactArray'
import React, { useState } from "react";
// import Card from './Card';
import './App.css';
function Forms() {
  const [heading ,setheading] = useState("hello, there");
  function handleclick(){
    setheading("clicked")
  }
const [onmouse , outmouse] = useState(false)
  // var onmousehover= false;
  function onmousehover(){
    outmouse(true);
  }
  function outmousehover(){
    outmouse(false);
  }
  const [ name , setname ] = useState('')
  const [ uiheading , setuiheading ] = useState('')
  function onChange(event){
    setname(event.target.value);
    console.log(event.target.value);
    console.log(event.target.placeholder);
    console.log(event.target.type);

  }
  function submit(event){
    setuiheading(name)
    event.preventDefault();
  }
  

return (

<>
<div className="style">
  <form onSubmit={submit}>
  <h2>{heading} {name}</h2>
  <input type='text' value={name} placeholder="type your name" className="input" onChange={onChange}/>
  <button className='button' type="submit"   style={{backgroundColor: onmouse ? "black" : 'greenyellow'}}  onMouseOver={onmousehover} onMouseOut={outmousehover}>submit</button>
  <h2 >{heading} {uiheading}</h2>
  </form>
</div>
</>
  );
}

export default Forms;
