const mongoose = require("mongoose"); //inclode mongoose in our page
const config = require('./config');
//connection to mongodb
const db = mongoose
  .connect(`mongodb+srv://${config.username}:${config.password}@cluster0-3xayr.mongodb.net/${config.dbname}?retryWrites=true&w=majority
  `, { useNewUrlParser: true,  useUnifiedTopology: true })
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log(" Error when connecting To Database :", err);
  });
module.exports = db;
//schema about book info
// let booksSchema = mongoose.Schema({
//  title: { type: String },
//  author:[{
//     type:String,
// }],
//  dateOfPublication: { type: String },
//   img: { type: String }
// });
//
//
// let BooksModel = mongoose.model("books", booksSchema);
//
// module.exports.BooksModel = BooksModel;
