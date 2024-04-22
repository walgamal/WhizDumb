import React from 'react'
import ScoreCard from './ScoreCard'
import '../../ComponentsCSS/GameBoardPageCSS/ScoreCards.css'

function ScoreCards(props) {
  return (
    <>
      <div className='score-cards-container'>
        <div className='score-cards'>
          <table className='score-cards-table'>
            <tbody>
              <tr className='score-cards-row'>
                {props.players.map((player, index) => (
                  player && <td key={index} className='score-card-wrapper'>
                    <ScoreCard Name={player} isCurrent={index === props.currentPlayer} Score={props.scores[index]}/>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ScoreCards