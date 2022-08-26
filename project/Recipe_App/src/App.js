// import React , {useEffect , useState} from "react";
import { BrowserRouter as Router,  Routes ,  Route } from "react-router-dom";
import About from "./About";
import './App.css';
import Home from "./Home";
import Nav from "./Nav";
import Shop from "./Shop";

const App = () => {
  // App.use(cors())
  

  

  return (

    <>
     <Router>
        <Nav></Nav>
     <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>

     </Routes>


     </Router>


    </>
  );
}

export default App;
