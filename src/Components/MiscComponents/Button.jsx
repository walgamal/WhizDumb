import React from 'react'
import '../../ComponentsCSS/MiscCSS/Button.css'
import { Link } from 'react-router-dom';

function Button(props) {
  const handleClick = () => {
    props.onClick();
  }

  if(props.href) {
    return (
      <>
        <Link to={`/${props.href}`} className={`${props.className} btn`} type='button' onClick={handleClick}>
          {props.text}
        </Link>
      </>
    )
  }
  else {
    return (
      <>
        <a className='btn-link'>
          <button className={`${props.className} btn`} type='button' onClick={handleClick}> 
              {props.text}
          </button>
        </a>
      </>
    )
  }

}

export default Button

