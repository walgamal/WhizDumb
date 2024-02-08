import React from 'react'

function QuestionIcon(props) {
  return (
    <>
        <td className={`game-board-question-${props.difficulty}`}>?</td>
    </>
  )
}

export default QuestionIcon