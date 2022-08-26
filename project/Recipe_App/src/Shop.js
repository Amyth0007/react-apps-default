import React, {useState, useEffect} from 'react'
import './App.css'

function Shop() {

   useEffect(()=>{
       fethItems();
   }, []);

   const[items, setItems] = useState([]);


    const fethItems = async () =>{
        const date = await fetch('https://fortnite-api.theapinetwork.com/store/get'); 

        const items = await date.json();
        // console.log(items);
        console.log(items.data[0].item);
        let mi = items.data
        // console.log();
        
        setItems(items.item);
    }


  return (

<>
{/* {items.map(data =>(
    <h1>{data.name}</h1>
))} */}
</>

    )
}



export default Shop
