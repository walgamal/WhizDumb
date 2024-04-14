import React from 'react'
import ScoreCard from './ScoreCard'
import '../../ComponentsCSS/GameBoardPageCSS/ScoreCards.css'

function ScoreCards() {
  return (
    <>
      <div className='score-cards-container'>
        <div className='score-cards'>
          <table className='score-cards-table'>
            <tbody>
              <tr className='score-cards-row'>
                <td className='score-card-wrapper'>
                  <ScoreCard Name='Player 1' Score='0'/>
                </td>
                <td className='score-card-wrapper'>
                  <ScoreCard Name='Player 2' Score='0'/>
                </td>
                <td className='score-card-wrapper'>
                  <ScoreCard Name='Player 3' Score='0'/>
                </td>
                <td className='score-card-wrapper'>
                  <ScoreCard Name='Player 4' Score='0'/>
                </td>
                <td className='score-card-wrapper'>
                  <ScoreCard Name='Player 5' Score='0'/>
                </td>
                <td className='score-card-wrapper'>
                  <ScoreCard Name='Player 6' Score='0'/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ScoreCards