import React from 'react'
import MiscHeader from '../Components/MiscComponents/MiscHeader'
import MiscFooter from '../Components/MiscComponents/MiscFooter'
import Categories from '../Components/StartComponents/Categories'
import Names from '../Components/StartComponents/Names'

function StartNames() {
  return (
    <>
      <MiscHeader />
      {location.pathname === '/start/names' && <Names />}
      {location.pathname === '/start/categories' && <Categories />}
      <MiscFooter />
    </>
  )
}

export default StartNames