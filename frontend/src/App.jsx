import React from 'react'
import io from 'socket.io-client'
const socket= io("http://localhost:5174")
const App = () => {
  const [message,setMessage] = React.useState("")
  const [received,receivedMessage] = React.useState("")
  const sendMessage=()=>{
    socket.emit('message',{message})
  };
  React.useEffect(()=>{
    socket.on('receive_message',(data)=>{
      receivedMessage(data.message)})
  },[socket])
  return (
    <div>
      <input onChange={(e)=>setMessage(e.target.value)} placeholder='message here...'/><br/>
      <button onClick={sendMessage}>Send Message</button>
      <h3>Received Message</h3>
      <p>{received}</p>
    </div>
  )
}

export default App
