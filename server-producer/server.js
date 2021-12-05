const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
})
const producer = kafka.producer()
producer.connect()
    .then(res => {
        console.log('producer server successfully started')
    })
    .catch(err => {
        console.log('producer server failed')
    })


const queueMessage = async (order) => {
    return await producer.send({
        topic: 'test-topic-2',
        messages: [
            { value: JSON.stringify(order) },
        ],
    })

}

setInterval(() => {
    const newOrder = {
        _id: "34343",
        clientId: "2323",
        price: 120
    }
    queueMessage(newOrder)
        .then(() => {
            console.log('sended message:', newOrder)

        })
        .catch(err => {
            console.log('failed message:', newOrder)
        })
}, 5000)