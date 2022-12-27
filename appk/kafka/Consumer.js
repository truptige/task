var kafka = require('kafka-node');

const createConsumer = async(req,res,next) => {
    var topic = req.params.topic,
    Consumer = kafka.Consumer,
        client = new kafka.KafkaClient(),

        consumer = new Consumer(client,
            [{ topic: topic, offset: 0 }],
            {
                autoCommit: false
            }
        );
    res.send({
        message: "consumer created",
        topic: topic
    })

    consumer.on('message', function (message) {
        console.log(message);
    });

    consumer.on('error', function (err) {
        console.log('Error:', err);
    })

    consumer.on('offsetOutOfRange', function (err) {
        console.log('offsetOutOfRange:', err);
    })
}
module.exports = { createConsumer }
