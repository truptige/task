const kafka = require('kafka-node');

var Producer = kafka.Producer,
    client = new kafka.KafkaClient(),
    producer = new Producer(client);

producer.on('ready', function () {
    console.log('Producer is ready');
});

producer.on('error', function (err) {
    console.log('Producer is in error state');
    console.log(err);
})

const createProducer = async (req, res, next) => {

    var sentMessage = JSON.stringify(req.body.message);
    payloads = [
        { topic: req.body.topic, messages: sentMessage, partition: 0 }
    ];
    producer.send(payloads, function (err, data) {
        
    });
    res.send({
        message:"Successfully added topic",
        payloads:payloads
    })

}

module.exports = { createProducer }