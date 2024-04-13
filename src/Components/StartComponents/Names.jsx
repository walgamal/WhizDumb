import React, { useContext, useRef } from 'react'
import AppContext from '../../AppContext'
import Button from '../MiscComponents/Button'
import NameInput from './NameInput'
import '../../ComponentsCSS/StartPageCSS/Names.css'

const Names = () => {
    const { setPlayersArray } = useContext(AppContext);

    const player1Ref = useRef(undefined);
    const player2Ref = useRef(undefined);
    const player3Ref = useRef(undefined);
    const player4Ref = useRef(undefined);
    const player5Ref = useRef(undefined);
    const player6Ref = useRef(undefined);
    const players = [];    

    const retreivePlayers = () => {
        const player1 = player1Ref.current.value;
        const player2 = player2Ref.current.value;
        const player3 = player3Ref.current.value;
        const player4 = player4Ref.current.value;
        const player5 = player5Ref.current.value;
        const player6 = player6Ref.current.value;

        const players = [player1, player2, player3, player4, player5, player6];

        setPlayersArray(players);
        console.log("Players are set to: " + players);
    }
    return (
    <>
        <div className='names-container'>
            <table className='enter-names-table'>
                <tr>
                    <td><NameInput ref={player1Ref}/></td>
                    <td><NameInput ref={player2Ref}/></td>
                    <td><NameInput ref={player3Ref}/></td>
                </tr>
                <tr>
                    <td><NameInput ref={player4Ref}/></td>
                    <td><NameInput ref={player5Ref}/></td>
                    <td><NameInput ref={player6Ref}/></td>
                </tr>
            </table>
            <Button className='continue-btn btn' text='Continue' href='start/categories' onClick={retreivePlayers}/>
        </div>
    </>
  )
}

export default Names