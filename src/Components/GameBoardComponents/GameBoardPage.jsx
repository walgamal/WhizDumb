import React from 'react'
import MiscHeader from '../MiscComponents/MiscHeader'
import MiscFooter from '../MiscComponents/MiscFooter'
import GameBoard from '../GameBoardComponents/GameBoard'
import ScoreCards from './ScoreCards'

function GameBoardPage() {
  return (
    <>
        <MiscHeader />
        <GameBoard />
        <ScoreCards />
        <MiscFooter />
    </>
  )
}

export default GameBoardPage