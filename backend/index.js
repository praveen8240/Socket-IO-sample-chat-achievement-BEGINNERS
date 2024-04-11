const express = require('express')
const app = express()



const cors = require('cors')
app.use(cors());


const {Server}= require('socket.io')
const http= require('http')
const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"]
    }
})

io.on("connection", (socket)=>{
    console.log("User Id ",socket.id)
    socket.on('message', (message)=>{
        console.log(message)
        socket.broadcast.emit('receive_message',message)
    })

})


server.listen(5174,console.log("5174 backend and 5173 frontend listening"))


