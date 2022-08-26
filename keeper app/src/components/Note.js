import React from 'react'
import './App1.css';

import {  Box} from '@chakra-ui/react'
function Note(props) {
  return (
    <div>



    
  
   <Box bg='grey' height='180px' width='250px' borderRadius='7px' boxShadow='0 2px 5px #ccc'>
     
    <h2> title : {props.title} </h2>
    <h4> note : {props.note} </h4>
    </Box> 
  {/* <Box bg='grey' height='80px' borderRadius='7px' boxShadow='0 2px 5px #ccc'></Box> */}
  {/* <Box bg='grey' height='80px' borderRadius='7px' boxShadow='0 2px 5px #ccc'></Box> */}
    </div>
  )
}

export default Note