const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser);
                           
//Routes
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

const app = express();

//BodyParser MidleWare
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB Config
const DB = require('./Config/Keys').mongoURI;

//Connect to DB
mongoose.connect(DB)
.then(() => console.log('Mongo DB Connected'))
.catch(err => console.log(err));

//User Routes
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`));
