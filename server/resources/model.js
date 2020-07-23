const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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


const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    unique:true

  },
  isDeleted: {
    type: String,
    default: Boolean
  }
})

UserSchema.methods.generateHash = function(password){
  console.log('here');
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}


UserSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password)
}


const UserModel = mongoose.model('users', UserSchema);


const UserSessionSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: ''
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
})

const UserSessionModel = mongoose.model('userSession', UserSessionSchema);

const loginSchema = mongoose.Schema({
  Email: { type: String },
  Password: { type: String },
});

var LoginModel = mongoose.model('Userlog', loginSchema);
module.exports = {
  BooksModel,
  ReadModel,
  FavBooksModel,
  commentsModel,
  UserModel,
  UserSessionModel
};

