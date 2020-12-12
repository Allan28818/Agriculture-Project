const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/farm_api', 
{useNewUrlParser: true}
);

requireDir('./models');

app.use('/api', require('./routes'));

app.listen(4000, () => {
    return console.log('api no ar');
});