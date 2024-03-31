import { useEffect, React } from 'react'
import './../../ComponentsCSS/GameBoardPageCSS/QuestionModal.css'

function QuestionModal(props) {
  
  useEffect(() => {
    let timer;
    
    console.log(props.open);
    console.log("Counter: " + props.counter)

    if(props.counter > 0) {
      console.log("decrement props.counter by 1");
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
        <h1 className='modal-title'>Title</h1>
        <p className='modal-question'>Who is the chubbiest little munchkin in the sea??</p>
        <div className='modal-button-container'>
          <div className='modal-top-buttons-container'>
            <div>
              <button className='modal-option' onClick={props.onClose}>Rana Batata</button>
            </div>
            <div>
              <button className='modal-option'>Chubbs</button>
            </div>
          </div>
          <div className='modal-bottom-buttons-container'>
            <div>
              <button className='modal-option'>Hubbs</button>
            </div>
            <div>
              <button className='modal-option'>Wasim Ice Cream</button>
            </div>
          </div>
        </div>

        {(props.counter === 0) ? reset(props) : <div className='modal-timer'>Countdown: {format(props.counter)} </div>}

      </div>
    </div>
  )
}

export default QuestionModal