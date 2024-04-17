import React, {useState, useContext} from 'react'
import MiscHeader from '../MiscComponents/MiscHeader'
import MiscFooter from '../MiscComponents/MiscFooter'
import GameBoard from '../GameBoardComponents/GameBoard'
import ScoreCards from './ScoreCards'
import QuestionModal from './QuestionModal'
import AppContext from '../../AppContext'

function GameBoardPage() {
  const { players } = useContext(AppContext);
  const { categories } = useContext(AppContext);

  const [openModal, setOpenModal] = useState(false);
  const [counter, setCounter] = useState(0);

  const setCounterToNum = (num) => {
    setCounter(num);
  }

  const handleClick = () => {
    console.log("Modal opened...")
    setOpenModal(openModal => !openModal);
    setCounter(10);
  };

  return (
    <>
        <QuestionModal 
          open={openModal} 
          onClose={() =>{ console.log("...Modal closed"); setOpenModal(false)}} 
          counter={counter} 
          setCounter={setCounterToNum}/>
        <MiscHeader />
        <GameBoard handleClick={handleClick} categories={categories} />
        <ScoreCards players={players} />
        <MiscFooter />
    </>
  )
}

export default GameBoardPage