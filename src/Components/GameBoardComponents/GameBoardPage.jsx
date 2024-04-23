import React, {useState, useContext} from 'react'
import MiscHeader from '../MiscComponents/MiscHeader'
import MiscFooter from '../MiscComponents/MiscFooter'
import GameBoard from '../GameBoardComponents/GameBoard'
import ScoreCards from './ScoreCards'
import QuestionModal from './QuestionModal'
import AppContext from '../../AppContext'

function GameBoardPage() {
  const { players } = useContext(AppContext);
  const { currentPlayer } = useContext(AppContext);
  const { scores } = useContext(AppContext);
  const { categories } = useContext(AppContext);

  const [openModal, setOpenModal] = useState(false);
  const [counter, setCounter] = useState(-1);

  const setCounterToNum = (num) => {
    setCounter(num);
  }

  const handleQuestionIconClick = () => {
    console.log("Modal opened...")
    setOpenModal(openModal => !openModal);
    setCounter(10);
  };

  const handleClosingModal = () => {
    console.log("...Modal closed"); 
    setOpenModal(false)
  }

  return (
    <>
        <QuestionModal 
          open={openModal} 
          onClose={handleClosingModal} 
          counter={counter} 
          setCounter={setCounterToNum}
        />
        
        <MiscHeader />
        <GameBoard handleClick={handleQuestionIconClick} categories={categories} />
        <ScoreCards players={players} currentPlayer={currentPlayer} scores={scores}/>
        <MiscFooter />
    </>
  )
}

export default GameBoardPage