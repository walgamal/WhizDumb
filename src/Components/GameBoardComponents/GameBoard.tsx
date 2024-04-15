import React from 'react'
import '../../ComponentsCSS/GameBoardPageCSS/GameBoard.css'
import QuestionIcon from './QuestionIcon'

function GameBoard(props) {
  const difficulties = ['easy', 'easy', 'medium', 'medium', 'hard'];

  return (
    <>
      <div className="game-board-container">
          <div className='game-board'>
              <table className='game-board-table'>
                <thead className='game-board-headers'>
                  <tr>
                    {props.categories.map((category, index) => (
                      <th key={index}>{category}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {difficulties.map((difficulty, rowIndex) => (
                    <tr key={rowIndex}>
                      {props.categories.map((category, colIndex) => (
                        <QuestionIcon
                          key={colIndex}
                          category={category}
                          difficulty={difficulty}
                          handleClick={props.handleClick}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
      </div>
    </>
  )
}

export default GameBoard