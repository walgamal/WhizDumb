import React from 'react'
import '../../ComponentsCSS/MiscCSS/MiscCard.css'

function MiscCard(props) {
  return (
    <>
      <div className="misc-hero">
          <div className='misc-card'>
              <h1 className='misc-card-title'>
                  {props.title}
              </h1>
              <p className='misc-card-p'>
                  {props.text}
              </p>
          </div>
      </div>
    </>
  )
}

export default MiscCard