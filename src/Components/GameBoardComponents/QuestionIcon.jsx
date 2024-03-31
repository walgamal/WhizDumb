import React from 'react'

function QuestionIcon(props) {
  return (
    <>
        <td className={`game-board-question-${props.difficulty}`} onClick={props.handleClick}>?</td>
    </>
  )
}

export default QuestionIcon