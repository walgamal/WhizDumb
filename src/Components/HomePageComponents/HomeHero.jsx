import React from 'react'
import Button from '../MiscComponents/Button'
import '../../ComponentsCSS/MiscCSS/Button.css'
import '../../ComponentsCSS/HomePageCSS/HomeHero.css'

function HomeHero() {
  return (
    <>
      <div className="home-hero">
          <div className='hero-card'>
              <h1 className='hero-card-title'>
                  WHAT'S WHIZDUMB?
              </h1>
              
              <p className='hero-card-p'>
                Think you're a know-it-all?
              </p> 
              
              <p className='hero-card-p'> 
              WhizDumb puts your brain to the test! Battle your friends across tons of trivia categories 
              and prove you're the smartest cookie in the jar. WhizDumb is sure to tickle your brain; a laugh-out-loud good time for 
              everyone. Be careful though, if you get a question wrong, it gives your opponents an oppurtunity to steal! So step up, 
              show off your smarts, and may the best know-it-all win! 
              </p>
              <Button className='start-btn btn' text='Start' href='start/names' />
          </div>
      </div>
    </>
  )
}

export default HomeHero