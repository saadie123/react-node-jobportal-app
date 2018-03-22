const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');

const app = express();
mongoose.connect('mongodb://saadie:saadie@ds121599.mlab.com:21599/job-portal');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/user', userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});