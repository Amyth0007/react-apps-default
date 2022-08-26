
// import './App.css';
// import cont from './ContactArray'
import React, { useState } from "react";
// import Card from './Card';
import './App.css';
function App() {
  const [inputtext , setinputtext] = useState(" ");
  const [items , setitems] = useState([]);
function handlechange(event){
 var newvalue = event.target.value;
  setinputtext(newvalue);
}
function handlclick(event){
 
  setitems((amit)=> [...amit , inputtext] )
  event.preventDefault();
}
return (

<>
<div className="style">
<form>
<input type='text' placeholder="type here" value={inputtext} onChange={handlechange} className="input" />
  <button className='button' type="submit" onClick={handlclick}   >submit</button>
  </form>
</div>
<div>
{
   items.map( (it) =><li>{it}</li> )
}

</div>
</>
  );
}

export default App;
