const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
// //middlewares
// app.use('/posts', () => {
//     console.log('This is middleware');
// });

//Import Routers
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
    res.send('We are on Home');
});


//connect to db
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log('connected to db')
);
//how do we start listening to the servier
//app.listen(3000);

var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);
