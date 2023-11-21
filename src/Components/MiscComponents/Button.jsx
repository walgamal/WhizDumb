import React from 'react'
import '../../ComponentsCSS/MiscCSS/Button.css'

function Button(props) {
  return (
    <>
        <button className={`${props.className} btn`} type='button' > 
            {props.text}
        </button>
    </>
  )
}

export default Button

