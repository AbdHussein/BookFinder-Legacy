const mongoose = require('mongoose');

let booksSchema = mongoose.Schema({
 title: { type: String },
 author:[{ type:String }],
 dateOfPublication: { type: String },
 img: { type: String }
});
let BooksModel = mongoose.model("Books", booksSchema);

//-------------

let readbooksSchema = mongoose.Schema({
  userID : { type : String },
  bookID : { type : String }
});
let ReadModel = mongoose.model("Read_Books", readbooksSchema);

//-------------

const userSchema = mongoose.Schema({
  FirstName: { type: String },
  LastName: { type: String },
  Email: { type: String, required: true, unique: true },
  Password: { type: String },
  Salt: { type: String }
});
let userModel = mongoose.model('users', userSchema);

//----------------

let favbooksSchema = mongoose.Schema({
 userID : { type : String },
 bookID : { type : String }
});
let FavBooksModel = mongoose.model('Favorite_Books', favbooksSchema);

//------------------

module.exports = {
  BooksModel,
  ReadModel,
  userModel,
  FavBooksModel
};
