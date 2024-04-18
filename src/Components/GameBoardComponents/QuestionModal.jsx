import { React, useEffect, useContext } from 'react'
import './../../ComponentsCSS/GameBoardPageCSS/QuestionModal.css'
import AppContext from '../../AppContext';

function QuestionModal(props) {
  const { question, questionCategory, correctAnswer, allAnswers} = useContext(AppContext);

  console.log(" Question:", question,"\n", "Correct Answer:", correctAnswer, "\n", "All Answer:", allAnswers);
  
  useEffect(() => {
    let timer;

    if(props.counter > 0) {
      timer = setTimeout(() => props.setCounter(props.counter - 1), 1000);
    }
    
    return () => {
      if(timer) {
        clearTimeout(timer);
      }
    };
  }, [props.counter]);

  const format = time => {
    return `${(time)} seconds`;
  };

  const reset = props => {
    props.onClose();
  }

  if(!props.open) return null;

  return (
    <div className='modal-overlay'> 
      <div className='modal-container'>
        <h1 className='modal-title'>{questionCategory}</h1>
        <p className='modal-question'>{question}</p>
        <div className='modal-button-container'>
          <div className='modal-top-buttons-container'>
            <div>
              <button className='modal-option' onClick={props.onClose}>{allAnswers[0]}</button>
            </div>
            <div>
              <button className='modal-option'>{allAnswers[1]}</button>
            </div>
          </div>
          <div className='modal-bottom-buttons-container'>
            <div>
              <button className='modal-option'>{allAnswers[2]}</button>
            </div>
            <div>
              <button className='modal-option'>{allAnswers[3]}</button>
            </div>
          </div>
        </div>

        {(props.counter === 0) ? reset(props) : <div className='modal-timer'>Countdown: {format(props.counter)} </div>}

      </div>
    </div>
  )
}

export default QuestionModal