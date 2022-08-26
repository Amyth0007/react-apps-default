import React from 'react'

function Card(props) {
  return (
    // <div className='card'>
    //     <h2>
    //         {props.name}
    //     </h2>
    //     <img src={props.img} alt = 'here is the img'/>
    //     <h3>{props.tele}</h3>
    //     <h4>{props.email}</h4>


    // // </div>
    // <div className="container-2">
    // <p className="number">{props.emoji}</p>
    // <h2>Name: {props.ename}</h2>
    // <p className="text">Meaning: {props.eMeaning}</p>
    // <p className="text">History: {props.ehistory}</p>
  // </div>
  <div className="card-container">
  <div className="card u-clearfix">
    <div className="card-body">
      <h1 className="card-number card-circle subtle">{props.emoji}</h1>
      <h6 className="card-title">Name: {props.ename}</h6>
      <span className="card-description subtle">Meaning: {props.eMeaning}</span>
      <span className="card-read">History:{props.ehistory}</span>
      <span className="card-tag card-circle subtle">C</span>
    </div>
  </div>
  <div className="card-shadow"></div>
</div>


    )
}

export default Card