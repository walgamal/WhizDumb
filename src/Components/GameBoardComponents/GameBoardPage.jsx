import React, {useState, useContext} from 'react'
import MiscHeader from '../MiscComponents/MiscHeader'
import MiscFooter from '../MiscComponents/MiscFooter'
import GameBoard from '../GameBoardComponents/GameBoard'
import ScoreCards from './ScoreCards'
import QuestionModal from './QuestionModal'
import WinnerModal from './WinnerModal'
import AppContext from '../../AppContext'

function GameBoardPage() {
  const { players, currentPlayer, scores, categories, questionsAnswered } = useContext(AppContext);

  const [openModal, setOpenModal] = useState(false);
  const [counter, setCounter] = useState(-1);

  const [winner, setWinner] = useState(null);
  const [winnerScore, setWinnerScore] = useState(null);

  const setCounterToNum = (num) => {
    setCounter(num);
  }

  const allQuestionsAnswered = () => {
    for (let row of questionsAnswered) {
      for (let cell of row) {
        if (cell === 0) {
          return false;
        }
      }
    }
    
    return true;
  };

  const calculateWinner = () => {
    let maxScore = -1;
    let playerWithMostPoints = null;

    scores.forEach((score, index) => {
      if (score > maxScore) {
        maxScore = score;
        playerWithMostPoints = players[index];
        setWinner(playerWithMostPoints);
      }
    });
    
    setWinnerScore(maxScore);
  };

  const handleClearedBoard = () => {
    if (allQuestionsAnswered()) {
      calculateWinner();
    } 
  }

  const handleQuestionIconClick = () => {
    console.log("Modal opened...")
    setOpenModal(openModal => !openModal);
    setCounter(10);
  };

  const handleClosingQuestionModal = () => {
    console.log("...Modal closed"); 
    setOpenModal(false)
    handleClearedBoard();
  }

  return (
    <>
        <QuestionModal 
          open={openModal} 
          onClose={handleClosingQuestionModal} 
          counter={counter} 
          setCounter={setCounterToNum}
        />
        
        <MiscHeader />

        {(!winner) && <GameBoard handleClick={handleQuestionIconClick} categories={categories} />}
        
        {
          (winner) && 
          <WinnerModal 
            winner={winner} 
            points={winnerScore}
          />
        }

        <ScoreCards players={players} currentPlayer={currentPlayer} scores={scores}/>
        <MiscFooter />
    </>
  )
}

export default GameBoardPage