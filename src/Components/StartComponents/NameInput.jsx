import React from 'react'

function NameInput() {
  return (
    <>
        <input 
            onFocus={(e) => e.target.placeholder = ""} 
            onBlur={(e) => e.target.placeholder = "NAME"} 
            className='name-input' 
            placeholder='NAME' 
        />
    </>
  )
}

export default NameInput