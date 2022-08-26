import React from 'react'
import animals from './Data';
function Destructring() {
  
  console.log(animals);

  const [amit , pratiksha] = animals;
  console.log(amit.sound);
  console.log(pratiksha.sound);
  // const {name ,sound} = amit;
  // console.log(name);
  // console.log(sound);
  const {name:a ,sound:b} = amit;
  console.log(a);
  console.log(b);
  const {name ,sound , feedingrequirments:{food , water}} = amit;
  // console.log(feedingrequirments.food);
  // console.log(feedingrequirments.water);
  console.log(water);
  console.log(food);
  
    return (
    <div>Destructring</div>
  )
}

export default Destructring