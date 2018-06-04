# ExpressServerSetUp
Set up for an Express Server incorporating Mongo, and creating a simple API route to get started.

1: create a folder for your server and run the following command in the terminal.
npm ini

2: Follow the steps to initialize the project. 
Here you have a choice of what your main file will be in this case I set mine to server.js as the entry point.
After that just create the file server,js.

3: After the project is initialized, go into the directory where your node project was created and install the required dependencies.
npm i express body-parser mongoose

4: Import the dependencies into the server.js file and initialize the app.

const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

Initialize app: const app = express();

5: Create a mlab database to use mongoose.

# Mongo URI Set Up:

6: Create a folder called Config in the root directory of your project and a file called Keys.js. This is where you will store the URI for mlab.

7: inside Keys.js write: 

modules.exports = 
{
    "mongodb://<dbuser>:<dbpassword>@ds139950.mlab.com:39950/mern-app-course2"
};

and replace the user and password with the respected values.

# Add bodyParser MiddleWare:

8: Go back to server.js and add the following line of code.

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());_

# Initialize and connect Mongo DB to the app.

const DB = require('./Config/Keys').mongoURI;

mongoose.connect(DB).then(() => console.log('DB Connected')).catch(err => console.log(err));

# Create a PORT for the app and set it to listen to the port.

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on ${port}`));

# Create Routes:

9: Create a folder called routes in the root directory and insode that folder create another folder called api.
Create the files for the routes: 
  users.js, posts.js, profile.js

10: Import the files into the server.js file:

const users = ('./routes/api/users');

const posts = ('./routes/api/posts');

const profile = ('./routes/api/profile');

11: Inside each file add the following code to set up the route and connect it to the app.

const express = require('express');

const router = express.Router();

Create a test route. This tet route will go in each of the route files.

//@route GET api/users//test

//@desc Test route

//@access Public

router.get('/test', (res, req) => res.json({msg: 'This is a message.'}));

12: Go back to Server.js and add the routes for the app.

app.use('/api/users');

app.use('/api/posts');

app.use('/api/profile');

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on ${port}`));


# The final file set up for Server.js should look like this:


const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

Initialize app: const app = express();


const users = ('./routes/api/users');

const posts = ('./routes/api/posts');

const profile = ('./routes/api/profile');


const DB = require('./Config/Keys').mongoURI;

mongoose.connect(DB).then(() => console.log('DB Connected')).catch(err => console.log(err));


app.use('/api/users', users);

app.use('/api/posts', posts);

app.use('/api/profile', profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on ${port}`));


# File set up for Routes should look like this:

const express = require('express');

const router = express.Router();

//@route GET api/users//test

//@desc Test route

//@access Public

router.get('/test', (res, req) => res.json({msg: 'This is a message.'}));
