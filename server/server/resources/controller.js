const {
  BooksModel,
  ReadModel,
  UserModel,
  FavBooksModel,
  commentsModel } = require('./model.js');

exports.book = function(req, res){
  const { title, author, dateOfPublication , img} = req.body;
  let bookDoc = new ReadModel({
    title,
    author,
    dateOfPublication,
    img,
  });
  bookDoc
    .save()
    .then(() => res.status(201).send("saved"))
    .catch((err) => res.status(500).send(err + "err"));
}

// get req favorite
exports.favourite = function(req, res){
  const userID = req.params.id;
  FavBooksModel.find({userID:userID})
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
}
 // post favorite

 exports.AddFavorite = function(req, res){
   console.log(req)
  const { userID, bookID } = req.body;

  let readDoc = new FavBooksModel({
    userID,
    bookID
    });
  readDoc.save()
    .then(() => res.status(201).send("saved"))
    .catch((err) => res.status(500).send(err + "err"));
}


/// 
exports.readBook = function(req, res){
  const { userID, bookID } = req.body;

  let readDoc = new ReadModel({
    userID,
    bookID
    });
  readDoc.save()
    .then(() => res.status(201).send("saved"))
    .catch((err) => res.status(500).send(err + "err"));
}

exports.readLater = function(req, res){
  ReadModel.find({})
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
}

/// remove fav 
exports.removeOne = function(req,res){
  const userID  = req.params.id;
  FavBooksModel.delete({userID: userID}).then((result)=>{
    res.status(204).send(`Book Deleted`);
  })
  .catch((err) => {
    res.status(500).send(err);
  })
}

exports.removeRead = function(req, res){
  const {userID, bookID} = req.body;
  ReadModel.deleteOne({userID, bookID}).then((result)=>{
    res.status(204).send(`${result.n} Books Deleted`);
  })
  .catch((err) => {
    res.status(500).send(err);
  })
}

exports.getAllComments = function(req, res){
  const bookID = req.params.id;
  commentsModel.find({bookID:bookID}).then(result => {
    res.status(200).send(result);
  }).catch(err => {
    console.log("Error: ", err);
  });
}

exports.addComment = function(req, res) {
  const {bookID, text, email, name, rating} = req.body;
  let newComment = new commentsModel({ bookID, text, email, name, rating });
  newComment.save().then(() => res.status(201).send("Comment Created"))
  .catch((err) => res.status(500).send("Error: " + err))
}

exports.findUser = function(req, res){
  const userID = req.params.id;
  UserModel.find({_id:userID})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
}
