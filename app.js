const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Import Routes 
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute);

// Route 
app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/posts', (req, res) => {
    res.send("Hello World Again!");
});

// Connect To DB Here 
mongoose.connect('mongodb://localhost:27017/UsersApi', { useNewUrlParser: true }, () => console.log("Connected to DB!"))

// How we start listenging on port;
app.listen(3000);



// git init
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/AbhishekYadav2022/Rest-Api-For-Handling-Post-Request.git
// git push -u origin main