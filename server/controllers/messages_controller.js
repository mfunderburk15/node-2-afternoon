const messages = [];

let id = 0

module.exports = {

    readMessage: (request, response) => {
        response.status(200).send(messages)

    },

    createMessage: (request, response) => {
        const { text, time } = request.body

        messages.push({ id, text, time })

        id++

        response.status(200).send(messages)
    },

    editMessage: (request, response) => {
        const { id } = request.params
        const { text } = request.body
        const newId = id

        const messageIndex = messages.findIndex(message => message.id === +id)

        let existingMessage = messages[messageIndex]

        const modifiedMessage = {
            id: existingMessage.id,
            text: text || existingMessage.text,
            time: existingMessage.time
        }

        if (messageIndex === -1) {
            return modifiedMessage.status(404).send('user not found')
        }

        response.status(200).send(modifiedMessage)
    },

    deleteMessage: (request, response) => {
        const { id } = request.params
        const deleteId = id

        const messageIndex = messages.findIndex(message => message.id === +id)

        if (messageIndex === -1) {
            return response.status(404).send('User not found')
        }

        messages.splice(messageIndex, 1,)

        response.status(200).send(messages)
    },
}