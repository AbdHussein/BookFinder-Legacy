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

let commentsSchema = mongoose.Schema({
  bookID : { type : String },
  text : { type : String },
  email : { type : String },
  name : { type : String },
  rating : { type : Number,  
    default: 2,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0']
  }
});
let commentsModel = mongoose.model('comments', commentsSchema);

module.exports = {
  BooksModel,
  ReadModel,
  userModel,
  FavBooksModel,
  commentsModel
};
