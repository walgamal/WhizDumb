import React from 'react'
import MiscHeader from '../Components/MiscComponents/MiscHeader'
import MiscFooter from '../Components/MiscComponents/MiscFooter'
import Names from '../Components/StartComponents/Names'
import { Route, useLocation, Link } from "react-router-dom";

function StartNames() {
  const location = useLocation();

  return (
    <>
      <MiscHeader />
      {location.pathname === '/start/names' && <Names />}
      {location.pathname === '/start/categories' && <div>TEST</div>}
      {/* <Categories /> */}
      <MiscFooter />
    </>
  )
}

export default StartNames