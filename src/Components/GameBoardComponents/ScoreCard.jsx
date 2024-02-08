import React from 'react'
import '../../ComponentsCSS/GameBoardPageCSS/ScoreCard.css'

function ScoreCard(props) {
  return (
    <>
        <div className='score-card'>
            <h1 className='name-title'>{props.Name}</h1>
            <hr />
            <h1 className='score'>{props.Score}</h1>
        </div>
    </>
  )
}

export default ScoreCard