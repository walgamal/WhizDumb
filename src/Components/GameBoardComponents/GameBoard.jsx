import React from 'react'
import '../../ComponentsCSS/GameBoardPageCSS/GameBoard.css'
import QuestionIcon from './QuestionIcon'

function GameBoard(props) {
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
                  <QuestionIcon difficulty='easy' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='easy' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='easy' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='easy' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='easy' handleClick={props.handleClick}/>                 
                </tr>
                <tr>
                  <QuestionIcon difficulty='easy' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='easy' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='easy' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='easy' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='easy' handleClick={props.handleClick}/>                 
                </tr>
                <tr>
                  <QuestionIcon difficulty='medium' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='medium' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='medium' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='medium' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='medium' handleClick={props.handleClick}/>
                </tr>
                <tr>
                  <QuestionIcon difficulty='medium' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='medium' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='medium' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='medium' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='medium' handleClick={props.handleClick}/>
                </tr>
                <tr>
                  <QuestionIcon difficulty='hard' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='hard' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='hard' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='hard' handleClick={props.handleClick}/>
                  <QuestionIcon difficulty='hard' handleClick={props.handleClick}/>
                </tr>
              </table>
          </div>
      </div>
    </>
  )
}

export default GameBoard