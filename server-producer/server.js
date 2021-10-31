const kafka = require('node-rdkafka')

const orderType = require('../types/OrderType')
const stream = kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
}, {}, { topic: 'test' })

const queueMessage = (order) => {
    const result = stream.write(orderType.toBuffer(order))
    console.log(result)
}

setInterval(() => {
    const newOrder = {
        _id: "34343",
        clientId: "2323",
        price: 120
    }
    queueMessage(newOrder)
}, 5000)