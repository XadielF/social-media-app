const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const routes = require('./routes/routes');
const app = express();

mongoose.connect('mongodb://localhost:27017/socialmediaapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> {
  console.log('Connected to Mongoose Database')
}).catch((err)=> {
  console.log('Error connecting to Database', err)
});

app.listen(3000, ()=> {
  console.log('Server is Running on Port 3000')
});


app.use('/api', routes);