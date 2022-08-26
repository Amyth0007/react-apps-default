import React from 'react';
import Hello from './sayhello';
import Tweet from './Tweet';
import "./App.css";
function App(){
  let msgs = "fall back to safe zone";
  return(
    <div>
      
      <h1 className='App'>this is app componnet</h1>
      <Tweet name = "Sansa stark" msg = "winter is coming" ></Tweet>
      <Tweet name = "John snow" msg = "winter is coming" ></Tweet>
      <Tweet name = "Tyrion lannister" msg = {msgs} ></Tweet>
    </div>
  );
}
export default App;
 
