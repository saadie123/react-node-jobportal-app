const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
mongoose.connect('mongodb://saadie:saadie@ds121599.mlab.com:21599/job-portal');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'client','public')));

app.use('/user', userRoutes);
app.use('/api/posts',postRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});