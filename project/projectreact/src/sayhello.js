import React from 'react'

 function Hello() {
    let sayhello = ()=>{
        console.log("hello");
      };
      let amit = "namskar";
      return(
        <div>
          <h1>hello there</h1>
          <button onClick={sayhello}>{amit}</button>
        </div>
      );
}
export default Hello;
