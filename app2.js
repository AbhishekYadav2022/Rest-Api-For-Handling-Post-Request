const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const PORT = 5000;
const registrationRoute = require('./routes/registrations')

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welcome to home page");
})

app.use('/register', registrationRoute);

// Database Connection
mongoose.connect('mongodb://localhost:27017/UserRegistration', { useNewUrlParser: true }, () => console.log("Connected to DB!"))


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
})
