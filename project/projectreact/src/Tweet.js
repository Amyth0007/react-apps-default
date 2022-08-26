import React from 'react'
import "./App.js"
// export default function Tweet(props) {
export default function Tweet({name , msg} ) {
  return (
      <>
      <div className='Tweet'>
      <h1>Name : {name}</h1>
      <h2> Todays summary : {msg}</h2>
      <h3>Trending</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, beatae perferendis aspernatur similique ea vitae dolorem obcaecati quidem tempora officiis autem? Consequatur quam cupiditate ad inventore, necessitatibus esse error nihil!</p>  
      </div>
    </>
  )
}
