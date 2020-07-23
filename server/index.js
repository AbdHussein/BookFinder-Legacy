const express = require("express");
let app = express();
const router = require('./resources/router.js')
const cors = require("cors");
const db = require('./database/index.js')
var bodyParser = require("body-parser");
const path = require('path');
//const bcrypt = require("bcrypt");
app.use(cors());


/// circleCi  => test each push
// cont deployment

// validation for info on signup and login. Search for good module
// handle errors and render to the user

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname + "client", "build")));


//take the data of the book that i seach about it and put in favorit list
app.use('/', router)

// app.get('/', (req, res) => {
//   res.send('works!')
// })



/// TODO:  authentication verrification/ check for token in every req for every user


var port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
