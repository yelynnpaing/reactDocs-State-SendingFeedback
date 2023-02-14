import React from 'react';
import './App.css'
import { useState } from 'react';

const App = () => {
  const [text , setText] = useState('');
  
  /* ---
  const [isSending , setIsSending] = useState(false);
  const [isSent , setIsSent] = useState(false);
  -- */
  const [status , setStatus] = useState('typing');

  async function SendingFeedback(e) {
    e.preventDefault()
    // setIsSending(true)
    setStatus('sending')
    await sendingMessage()
    // setIsSending(false)
    // setIsSent(true)
    setStatus('sent')
  }

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if(isSent){
    return <p>Thank's for your feedback</p>
  }

  return (
    <div className='App-header'>
      <form onSubmit={SendingFeedback}>
        <h4>How was your stay at The Prancing Pony ?</h4>
        <textarea 
          disabled = {isSending}
          value = {text}
          onChange = {e => setText(e.target.value)}
        >
        </textarea> 
        <br/>
        <button 
          type='submit'
          disabled = {isSending}
        >
          Send
        </button>
        {isSending && <p>Sending .... </p>}
      </form>
    </div>
  )
}

//pretend
function sendingMessage (text){
  return new Promise (resolve => {
    setTimeout (resolve, 2000);
  });
}

export default App