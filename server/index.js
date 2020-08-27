const express = require('express')
const messageCtrl = require('./controllers/messages_controller')

const app = express()
const SERVER_PORT = 3001

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.listen(SERVER_PORT, () => { console.log(`This app is using port: ${SERVER_PORT}`) })

app.get('/api/messages', messageCtrl.readMessage)

app.post('/api/messages', messageCtrl.createMessage)

app.put('/api/messages/:id', messageCtrl.editMessage)

app.delete('/api/messages/:id', messageCtrl.deleteMessage)