import express from 'express';
import mongoose from 'mongoose';
import routreUser from './routes/authroutes.js'

const app = express();

// middleware
app.use(express.static('public'));
app.use(routreUser)
app.use(express.json())

// view engine
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/Users', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => {
    console.log('connected to db');
    app.listen(3000, () => console.log('server running on port 3000'));
  })
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
