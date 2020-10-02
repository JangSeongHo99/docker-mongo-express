const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, function () {
    console.log('test server listening on port http://0.0.0.0:3000');
});