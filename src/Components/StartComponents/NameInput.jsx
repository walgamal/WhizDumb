import React, { forwardRef } from 'react'

const NameInput = forwardRef((props, ref) => {
  return (
    <>
        <input 
            onFocus={(e) => e.target.placeholder = ""} 
            onBlur={(e) => e.target.placeholder = "NAME"} 
            className='name-input' 
            placeholder='NAME' 
            ref={ref}
        />
    </>
  )
})

export default NameInput