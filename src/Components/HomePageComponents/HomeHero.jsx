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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Pellentesque diam volutpat commodo sed egestas 
                  egestas fringilla. Vel eros donec ac odio tempor orci. At consectetur lorem donec massa sapien faucibus et molestie 
                  ac. Viverra mauris in aliquam sem fringilla ut. Sed blandit libero volutpat sed cras ornare arcu dui.<br/> 
                  PUT INTRO HERE
              </p>
              <Button className='start-btn btn' text='Start' />
          </div>
      </div>
    </>
  )
}

export default HomeHero