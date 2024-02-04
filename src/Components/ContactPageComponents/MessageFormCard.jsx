import React from 'react'
import '../../ComponentsCSS/ContactPageCSS/MessageFormCard.css'

function MessageFormCard(props) {
  return (
    <>
      <div className="message-card-hero">
          <div className='message-card'>
              <h1 className='message-card-title'>
                  {props.title}
              </h1>
              <hr className='message-card-hr' />
              <div className='message-card-first-row-container'>
                <div className='message-card-label-input-container'>
                  <label className='message-card-label'>Name</label>
                  <br/>
                  <input className='message-card-input'></input>
                </div>
                <div>
                  <label className='message-card-label'>Email</label>
                  <br/>
                  <input className='message-card-input'></input>
                </div>
              </div>
              <div className='message-card-label-textarea-container'>
                <label className='message-card-label'>Message</label>
                <br />
                <textarea className='message-card-textarea' maxLength={500}></textarea>
              </div>
              <button className='send-btn' type='button'>
                Send
              </button>
          </div>
      </div>
    </>
  )
}

export default MessageFormCard