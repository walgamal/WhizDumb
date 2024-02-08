import React from 'react'
import ScoreCard from './ScoreCard'
import '../../ComponentsCSS/GameBoardPageCSS/ScoreCards.css'

function ScoreCards() {
  return (
    <>
      <div className='score-cards-container'>
        <div className='score-cards'>
          <table className='score-cards-table'>
            <tr className='score-cards-row'>
              <td className='score-card-wrapper'>
                <ScoreCard Name='Wasim' Score='0'/>
              </td>
              <td className='score-card-wrapper'>
                <ScoreCard Name='Rana' Score='0'/>
              </td>
              <td className='score-card-wrapper'>
                <ScoreCard Name='Reena' Score='0'/>
              </td>
              <td className='score-card-wrapper'>
                <ScoreCard Name='Ramia' Score='0'/>
              </td>
              <td className='score-card-wrapper'>
                <ScoreCard Name='Badr' Score='0'/>
              </td>
              <td className='score-card-wrapper'>
                <ScoreCard Name='Helal' Score='0'/>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default ScoreCards