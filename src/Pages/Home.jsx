import React from 'react'
import HomeHero from '../Components/HomePageComponents/HomeHero'
import HomeHeader from '../Components/HomePageComponents/HomeHeader'
import HomeFooter from '../Components/HomePageComponents/HomeFooter'

function Home() {
  return (
    <>
      <HomeHeader />
      <HomeHero />
      {/* FIXME: Fix footer; 
      needs to be stuck to bottom - 
      try overflow:scroll if hero gets too tall? */}
      <HomeFooter />
    </>
  )
}

export default Home