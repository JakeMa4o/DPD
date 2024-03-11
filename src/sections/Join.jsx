import React from 'react'

import boxSvg from "../assets/box.svg"

const Join = () => {
  return (
    <section className='join-us'>
      <div className="join-us-text">
        <h2 className='title'>Присоединяйся в нашу дружную команду!</h2>
      </div>
      <div className="logo">
          <div className="box-icon">
            <img src={boxSvg} alt="box-icon" />
          </div>
          dpd
        </div>
    </section>
  )
}

export default Join