// Maint starting point of the application
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const router = require('./router')
const mongoose = require('mongoose')


// DB setup
// mongoose.connect('mongodb://localhost:2701/1', { useNewUrlParser: true })
// mongoose.connect('mongodb://localhost:27017/react-redux', {useNewUrlParser: true});
mongoose.connect(
    "mongodb://localhost:27017/auth-real", 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
);
const connection = mongoose.connection;

connection.on("connected", function() {
  console.log("connected to db");
});

// App setup
// income request will be passed into these 2 parts
app.use(morgan('combined'))  // logging framework
app.use(bodyParser.json({ type: '*/*'} ))
router(app)

// Server setup
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)

console.log('Server is listening: ', port)