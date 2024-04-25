import React from 'react';
import './../../ComponentsCSS/GameBoardPageCSS/QuestionModal.css';

function WinnerModal(props) {
  return (
    <>
      <div className='modal-overlay'>
        <div className='modal-container'>
          <h1 className='modal-title good'>You're The Whiz!</h1>
          <p className='modal-question'>Congratulations, {props.winner}! You won and scored {props.points} points.</p>
          <br />
          <p className='modal-question'>You have earned the right to call everyone else Dumb!</p>
          <br />

          <div className='modal-button-container'>
              <div className='modal-top-buttons-container'>
                <div>
                    <button className='modal-option'>Play Again</button>
                </div>
                <div>
                    <button className='modal-option'>Reset Game</button>
                  </div>
              </div>
            </div>
          
          {/* TODO: Add 'Play Again' and 'Reset' buttons */}
        </div>
      </div>
    </>
  )
}

export default WinnerModal;
