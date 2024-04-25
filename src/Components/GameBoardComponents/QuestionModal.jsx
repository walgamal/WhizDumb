import React, { useEffect, useContext, useState } from 'react';
import './../../ComponentsCSS/GameBoardPageCSS/QuestionModal.css';
import AppContext from '../../AppContext';

function checkAnswer(selectedAnswer, correctAnswer, answerAttempts, setAnswerAttempts, setShowNotification, questionDifficulty, scores, currentPlayer, players, setScoresArray, setCurrentPlayerToActivePlayer, props, setClickedOptions) {
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
    console.log(players[currentPlayer] + " got it correct! They score a point!");
    setAnswerAttempts(0);
    props.setCounter(-1);
    setClickedOptions(prevState => ({
      ...prevState,
      [selectedAnswer]: true
    }));
    props.onClose();
  } else {
    setCurrentPlayerToActivePlayer(currentPlayer, false);
        
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    
    props.setCounter(12);
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
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");
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

    if(props.counter === 0) {
      notifyTimerRanOut();
    }

    if (answerAttempts == numAttemptsAllowed) {
      notifyAttemptsUsedUp();
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

  const notifyTimerRanOut = () => {
    console.log("Time's up!");
    setNotificationMsg("Time's up! The correct answer was: " + correctAnswer + ". \n");
    setCurrentPlayerToActivePlayer(currentPlayer, false);
    setShowNotification(true);
    setAnswerAttempts(0);
    props.setCounter(-1);
  
    setTimeout(() => {
      setShowNotification(false);
      setNotificationMsg("Incorrect! ");
      props.onClose();
    }, 3000);
  }

  const notifyAttemptsUsedUp = () => {
    console.log("Ran out of attempts to answer this question!");
    setNotificationMsg("No more attempts! The correct answer was: " + correctAnswer + ". \n");
    setCurrentPlayerToActivePlayer(currentPlayer, false);
    setShowNotification(true);
    setAnswerAttempts(0);
    props.setCounter(-1);
    
    setTimeout(() => {
      setShowNotification(false);
      setNotificationMsg("Incorrect! ");
      props.onClose();
    }, 3000);
  }

  const reset = props => {    
    console.log("DONE");
    setAnswerAttempts(0);
    setNotificationMsg("Incorrect! ");
    setCurrentPlayerToActivePlayer(currentPlayer, false);
    props.onClose();
  }

  if (!props.open) return null;

  return (
    <>
      <div className='modal-overlay'>
        <div className='modal-container'>
          <em className='current-player-indicator'>{players[currentPlayer]}</em>
          <h1 className='modal-title'>{questionCategory}</h1>
          <p className='modal-question'>{question}</p>
          {!showNotification && 
            <div className='modal-button-container'>
              <div className='modal-top-buttons-container'>
                {!clickedOptions[allAnswers[0]] && (
                  <div>
                    <button className='modal-option' onClick={() => checkAnswer(allAnswers[0], correctAnswer, answerAttempts, setAnswerAttempts, setShowNotification, questionDifficulty, scores, currentPlayer, players, setScoresArray, setCurrentPlayerToActivePlayer, props, setClickedOptions)}>{allAnswers[0]}</button>
                  </div>
                )}
                {clickedOptions[allAnswers[0]] && (
                  <div>
                    <button className='incorrect' >WRONG!</button>
                  </div>
                )}
                {!clickedOptions[allAnswers[1]] && (
                  <div>
                    <button className='modal-option' onClick={() => checkAnswer(allAnswers[1], correctAnswer, answerAttempts, setAnswerAttempts, setShowNotification, questionDifficulty, scores, currentPlayer, players, setScoresArray, setCurrentPlayerToActivePlayer, props, setClickedOptions)}>{allAnswers[1]}</button>
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
                    <button className='modal-option' onClick={() => checkAnswer(allAnswers[2], correctAnswer, answerAttempts, setAnswerAttempts, setShowNotification, questionDifficulty, scores, currentPlayer, players, setScoresArray, setCurrentPlayerToActivePlayer, props, setClickedOptions)}>{allAnswers[2]}</button>
                  </div>
                )}
                {clickedOptions[allAnswers[2]] && (
                  <div>
                    <button className='incorrect' >WRONG!</button>
                  </div>
                )}
                {!clickedOptions[allAnswers[3]] && (
                  <div>
                    <button className='modal-option' onClick={() => checkAnswer(allAnswers[3], correctAnswer, answerAttempts, setAnswerAttempts, setShowNotification, questionDifficulty, scores, currentPlayer, players, setScoresArray, setCurrentPlayerToActivePlayer, props, setClickedOptions)}>{allAnswers[3]}</button>
                  </div>
                )}
                {clickedOptions[allAnswers[3]] && (
                  <div>
                    <button className='incorrect' >WRONG!</button>
                  </div>
                )}
              </div>
            </div>
          }

          <div className='modal-timer'>Countdown: {format(props.counter)} </div>
          
          {
            showNotification && (
            <div className="notification">
              <p>{notificationMsg} It is now {players[currentPlayer]}'s turn.</p>
            </div>)
          }

          {
            (numAttemptsAllowed - answerAttempts) === 1 ?
            <div className="notification">
              <p>Only One Attempt Left!</p>
            </div> : 
            <></>
          }

        </div>
      </div>
    </>
  )
}

export default QuestionModal;
