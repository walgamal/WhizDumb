import React from 'react'
import '../../ComponentsCSS/MiscCSS/Button.css'

function Button(props) {
  return (
    <>
      <a className='btn-link' href={`/${props.href}`}>
        <button className={`${props.className} btn`} type='button' > 
            {props.text}
        </button>
      </a>
    </>
  )
}

export default Button

