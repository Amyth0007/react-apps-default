
// import './App.css';
// import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

function App() {


  return (
    <>
      {/* <h1>amit is good boy</h1> */}
      {/* <Router> */}
        <Navbar title={`text me`} home=" Ghar" />
        <Alert fomo="hey there how are you" />
        <div className=' container my-3'>
        <TextForm heading='Enter whatever you want' />
        <About />
          {/* <Routes> */}
          {/* <Route exact path="/About" element={<About/>}> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/" element={<TextForm/>}> */}
              {/* <TextForm heading='Enter whatever you want' /> */}
            {/* </Route> */}
           {/* </Routes> */}
        </div>
      {/* </Router> */}

    </>

  );
}

export default App;
