const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let booksSchema = mongoose.Schema({
 title: { type: String },
 author:[{
    type:String,
}],
 dateOfPublication: { type: String },
  img: { type: String }
});


let BooksModel = mongoose.model("books", booksSchema);

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
    default: ''
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

let RegModel = mongoose.model('users-model', RegSchema);

let favbooksSchema = mongoose.Schema({
 title: { type: String },
 author: { type: String },
  img: { type: String },
  readlearter : { type : Boolean }
});

let FavBooksModel = mongoose.model('FavBooks', favbooksSchema);

module.exports = {
  UserModel,
  UserSessionModel,
  BooksModel,
  LoginModel,
  ReadModel,
  RegModel,
  FavBooksModel
};
