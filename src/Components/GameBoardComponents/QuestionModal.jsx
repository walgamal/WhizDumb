import React, { useEffect, useContext, useState } from 'react';
import './../../ComponentsCSS/GameBoardPageCSS/QuestionModal.css';
import AppContext from '../../AppContext';

function checkAnswer(selectedAnswer, correctAnswer, answerAttempts, setAnswerAttempts, questionDifficulty, scores, currentPlayer, players, setScoresArray, setCurrentPlayerToActivePlayer, props, setClickedOptions) {
  console.log("Scores:", scores, "\n", "Current Player:", currentPlayer, "\n", "Players:", players);

  if (selectedAnswer === correctAnswer) {
    
    switch(questionDifficulty) {
      case "easy":
        scores[currentPlayer] += 1;
        break;
      case "medium":
        scores[currentPlayer] += 2;
        break;
      case "hard":
        scores[currentPlayer] += 3;
        break;
      default:
        scores[currentPlayer] += 1;
    }

    setScoresArray(scores);
    console.log("Player" + (currentPlayer + 1) + " got it correct! They score a point!");
    setAnswerAttempts(0);
    setClickedOptions(prevState => ({
      ...prevState,
      [selectedAnswer]: true
    }));
    props.onClose();
  } else {
    setCurrentPlayerToActivePlayer(currentPlayer, false);
    props.setCounter(10);
    alert("WRONG! NEXT PLAYER TURN!");
    setAnswerAttempts(answerAttempts + 1);
  }
  
  setClickedOptions(prevState => ({
    ...prevState,
    [selectedAnswer]: true
  }));
}

function QuestionModal(props) {
  const { players, currentPlayer, scores, question, questionCategory, correctAnswer, allAnswers, questionDifficulty } = useContext(AppContext);
  const { setScoresArray, setCurrentPlayerToActivePlayer } = useContext(AppContext);

  const [answerAttempts, setAnswerAttempts] = useState(0);
  const [clickedOptions, setClickedOptions] = useState({
    [allAnswers[0]]: false,
    [allAnswers[1]]: false,
    [allAnswers[2]]: false,
    [allAnswers[3]]: false
  });

  if (players.filter(player => player !== '').length < 3) {
    numAttemptsAllowed = 2;
  } else {
    var numAttemptsAllowed = 3;
  }

  console.log(" Question:", question, "\n", "Correct Answer:", correctAnswer, "\n", "All Answer:", allAnswers, "Number of Attempts:", answerAttempts, "Num allowed:", numAttemptsAllowed);

  useEffect(() => {
    let timer;

    if (props.counter > 0) {
      timer = setTimeout(() => props.setCounter(props.counter - 1), 1000);
    }

    return () => {
      if (timer) {
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

  if (!props.open) return null;

  if (answerAttempts == numAttemptsAllowed) {
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
              {!clickedOptions[allAnswers[0]] && (
                <div>
                  <button className='modal-option' onClick={() => checkAnswer(allAnswers[0], correctAnswer, answerAttempts, setAnswerAttempts, questionDifficulty, scores, currentPlayer, players, setScoresArray, setCurrentPlayerToActivePlayer, props, setClickedOptions)}>{allAnswers[0]}</button>
                </div>
              )}
              {clickedOptions[allAnswers[0]] && (
                <div>
                  <button className='incorrect' >WRONG!</button>
                </div>
              )}
              {!clickedOptions[allAnswers[1]] && (
                <div>
                  <button className='modal-option' onClick={() => checkAnswer(allAnswers[1], correctAnswer, answerAttempts, setAnswerAttempts, questionDifficulty, scores, currentPlayer, players, setScoresArray, setCurrentPlayerToActivePlayer, props, setClickedOptions)}>{allAnswers[1]}</button>
                </div>
              )}
              {clickedOptions[allAnswers[1]] && (
                <div>
                  <button className='incorrect' >WRONG!</button>
                </div>
              )}
            </div>
            <div className='modal-bottom-buttons-container'>
              {!clickedOptions[allAnswers[2]] && (
                <div>
                  <button className='modal-option' onClick={() => checkAnswer(allAnswers[2], correctAnswer, answerAttempts, setAnswerAttempts, questionDifficulty, scores, currentPlayer, players, setScoresArray, setCurrentPlayerToActivePlayer, props, setClickedOptions)}>{allAnswers[2]}</button>
                </div>
              )}
              {clickedOptions[allAnswers[2]] && (
                <div>
                  <button className='incorrect' >WRONG!</button>
                </div>
              )}
              {!clickedOptions[allAnswers[3]] && (
                <div>
                  <button className='modal-option' onClick={() => checkAnswer(allAnswers[3], correctAnswer, answerAttempts, setAnswerAttempts, questionDifficulty, scores, currentPlayer, players, setScoresArray, setCurrentPlayerToActivePlayer, props, setClickedOptions)}>{allAnswers[3]}</button>
                </div>
              )}
              {clickedOptions[allAnswers[3]] && (
                <div>
                  <button className='incorrect' >WRONG!</button>
                </div>
              )}
            </div>
          </div>

          {(props.counter === 0) ? reset(props) : <div className='modal-timer'>Countdown: {format(props.counter)} </div>}

        </div>
      </div>
    </>
  )
}

export default QuestionModal;
