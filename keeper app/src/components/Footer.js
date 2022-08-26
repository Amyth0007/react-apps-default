import React from 'react'

function Footer() {

    const y = new Date().getFullYear();

  return (
    <div className='footer'>

        Copyrights belongs to © to Amit {y}
    </div>
  )
}

export default Footer