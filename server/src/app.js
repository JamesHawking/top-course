console.log('Hey');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Init express
const app = express();

app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
  res.send({
    messega: 'hello',
  });
});

app.listen(process.env.PORT || 8081);
