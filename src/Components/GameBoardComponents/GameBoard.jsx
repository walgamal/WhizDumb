import React from 'react'
import '../../ComponentsCSS/GameBoardPageCSS/GameBoard.css'
import QuestionIcon from './QuestionIcon'

function GameBoard() {
  return (
    <>
      <div className="game-board-container">
          <div className='game-board'>
              <table className='game-board-table'>
                <thead className='game-board-headers'>
                  <th>General Knowledge</th>
                  <th>Random Category</th>
                  <th>Random Category</th>
                  <th>Random Category</th>
                  <th>Random Category</th>
                </thead>
                <tr>
                  <QuestionIcon difficulty='easy'/>
                  <QuestionIcon difficulty='easy'/>
                  <QuestionIcon difficulty='easy'/>
                  <QuestionIcon difficulty='easy'/>
                  <QuestionIcon difficulty='easy'/>                 
                </tr>
                <tr>
                  <QuestionIcon difficulty='easy'/>
                  <QuestionIcon difficulty='easy'/>
                  <QuestionIcon difficulty='easy'/>
                  <QuestionIcon difficulty='easy'/>
                  <QuestionIcon difficulty='easy'/>                 
                </tr>
                <tr>
                  <QuestionIcon difficulty='medium'/>
                  <QuestionIcon difficulty='medium'/>
                  <QuestionIcon difficulty='medium'/>
                  <QuestionIcon difficulty='medium'/>
                  <QuestionIcon difficulty='medium'/>
                </tr>
                <tr>
                <QuestionIcon difficulty='medium'/>
                  <QuestionIcon difficulty='medium'/>
                  <QuestionIcon difficulty='medium'/>
                  <QuestionIcon difficulty='medium'/>
                  <QuestionIcon difficulty='medium'/>
                </tr>
                <tr>
                  <QuestionIcon difficulty='hard'/>
                  <QuestionIcon difficulty='hard'/>
                  <QuestionIcon difficulty='hard'/>
                  <QuestionIcon difficulty='hard'/>
                  <QuestionIcon difficulty='hard'/>
                </tr>
              </table>
          </div>
      </div>
    </>
  )
}

export default GameBoard