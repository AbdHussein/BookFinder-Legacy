const mongoose = require('mongoose');

let booksSchema = mongoose.Schema({
 title: { type: String },
 author:[{
    type:String,
}],
 dateOfPublication: { type: String },
  img: { type: String }
});


let BooksModel = mongoose.model("books", booksSchema);


const loginSchema = mongoose.Schema({
  Email: { type: String },
  Password: { type: String },
});

var LoginModel = mongoose.model('Userlog', loginSchema);

let readbooksSchema = mongoose.Schema({
 title: { type: String },
 dateOfPublication: { type: String },
  img: { type: String },
  readlearter : {type : Boolean}
});


let ReadModel = mongoose.model("readbooks", readbooksSchema);

const RegSchema = mongoose.Schema({
  FirstName: { type: String },
  LastName: { type: String },
  Email: { type: String, required: true, unique: true },
  Password: { type: String },
});

let RegModel = mongoose.model('users', RegSchema);

let favbooksSchema = mongoose.Schema({
 title: { type: String },
 author: { type: String },
  img: { type: String },
  readlearter : { type : Boolean }
});

let FavBooksModel = mongoose.model('FavBooks', favbooksSchema);

module.exports = {
  BooksModel,
  LoginModel,
  ReadModel,
  RegModel,
  FavBooksModel
};
