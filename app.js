const express = require('express');
const mongoose = require('mongoose')
const app = express();

var db = mongoose.createConnection('mongodb://root:witcar700@mongo:27017/test?authSource=admin', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
.catch(error => console.log(error))

/*
mongoose.connect('mongodb://root:witcar700@0.0.0.0:27017/test', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
.catch(error => console.log(error))
*/

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, function () {
    console.log('test server listening on port http://0.0.0.0:3000');
});
