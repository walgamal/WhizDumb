import { React, useEffect, useContext, useState } from 'react'
import './../../ComponentsCSS/GameBoardPageCSS/QuestionModal.css'
import AppContext from '../../AppContext';

function checkAnswer (selectedAnswer, correctAnswer, answerAttempts, setAnswerAttempts, scores, currentPlayer, players, setScoresArray, setCurrentPlayerToActivePlayer, props) {
  console.log("Scores:", scores, "\n", "Current Player:", currentPlayer, "\n", "Players:", players);
  
  if(selectedAnswer == correctAnswer) {
    scores[currentPlayer] += 1;
    setScoresArray(scores);  
    console.log("Player" + (currentPlayer+1) + " got it correct! They score a point!");
    setAnswerAttempts(0);
    props.onClose();
  }
  else {
    setCurrentPlayerToActivePlayer(currentPlayer, false);
    props.setCounter(10);
    alert("WRONG! NEXT PLAYER TURN!");
    setAnswerAttempts(answerAttempts + 1);
  }
}

function QuestionModal(props) {
  const { players, currentPlayer, scores, question, questionCategory, correctAnswer, allAnswers } = useContext(AppContext);
  const { setScoresArray, setCurrentPlayerToActivePlayer } = useContext(AppContext);
  
  const [answerAttempts, setAnswerAttempts] = useState(0);

  if(players.filter(player => player !== '').length < 3 ) {
    numAttemptsAllowed = 2;
  }
  else {
    var numAttemptsAllowed = 3;
  }

  console.log(" Question:", question,"\n", "Correct Answer:", correctAnswer, "\n", "All Answer:", allAnswers, "Number of Attempts:", answerAttempts, "Num allowed:", numAttemptsAllowed);
  
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

  if(answerAttempts == numAttemptsAllowed) {
    console.log("Ran out of attempts to answer this question!");
    setAnswerAttempts(0);
    props.onClose();
  }

  return (
    <>
      <div className='modal-overlay'> 
        <div className='modal-container'>
          <em className='current-player-indicator'>{players[currentPlayer]}</em>
          <h1 className='modal-title'>{questionCategory}</h1>
          <p className='modal-question'>{question}</p>
          <div className='modal-button-container'>
            <div className='modal-top-buttons-container'>
              <div>
                <button className='modal-option' onClick={() => checkAnswer(allAnswers[0], correctAnswer, answerAttempts, setAnswerAttempts, scores, currentPlayer, players, setScoresArray, setCurrentPlayerToActivePlayer, props)}>{allAnswers[0]}</button>
              </div>
              <div>
                <button className='modal-option' onClick={() => checkAnswer(allAnswers[1], correctAnswer, answerAttempts, setAnswerAttempts, scores, currentPlayer, players, setScoresArray, setCurrentPlayerToActivePlayer, props)}>{allAnswers[1]}</button>
              </div>
            </div>
            <div className='modal-bottom-buttons-container'>
              <div>
                <button className='modal-option' onClick={() => checkAnswer(allAnswers[2], correctAnswer, answerAttempts, setAnswerAttempts, scores, currentPlayer, players, setScoresArray, setCurrentPlayerToActivePlayer, props)}>{allAnswers[2]}</button>
              </div>
              <div>
                <button className='modal-option' onClick={() => checkAnswer(allAnswers[3], correctAnswer, answerAttempts, setAnswerAttempts, scores, currentPlayer, players, setScoresArray, setCurrentPlayerToActivePlayer, props)}>{allAnswers[3]}</button>
              </div>
            </div>
          </div>

          {(props.counter === 0) ? reset(props) : <div className='modal-timer'>Countdown: {format(props.counter)} </div>}

        </div>
      </div>
    </>
  )
}

export default QuestionModal