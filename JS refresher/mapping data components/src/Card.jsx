import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <h2>
            {props.name}
        </h2>
        <img src={props.img} alt = 'here is the img'/>
        <h3>{props.tele}</h3>
        <h4>{props.email}</h4>
    </div>
  )
}

export default Card