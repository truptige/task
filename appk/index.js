const express = require('express');
const app = express();
const kafka = require('kafka-node');
const router= require('./routes/routes')

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 



app.listen(3000, '0.0.0.0', () => {
    console.log('server started on port 3000')
})

app.use('/', router)

module.expots = app