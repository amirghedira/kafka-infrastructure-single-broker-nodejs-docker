const kafka = require('node-rdkafka')
const orderType = require('../types/OrderType')


const consumer = kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092'
}, {})


consumer.connect()
consumer.on('ready', () => {
    console.log('consumer ready')
    consumer.subscribe(['orders'])
    consumer.consume()

}).on('data', (data) => {
    console.log(orderType.fromBuffer(data.value))
})