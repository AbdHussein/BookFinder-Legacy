const {
  BooksModel,
  ReadModel,
  userModel,
  FavBooksModel } = require('./model.js');

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


exports.favourite = function(req, res){
  const {userID} = req.params;
  FavBooksModel.find({userID})
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
}

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

// does not work
exports.removeOne = function(req,res){
  const { id } = req.params;
  BooksModel.deleteOne({_id : id}).then((result)=>{
    res.status(204).send(`${result.n} Books Deleted`);
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

exports.register = function (req, res){

  const { FirstName, LastName, Email, Password, Salt } = req.body;
  let regDocumentation = new userModel({ FirstName, LastName, Email, Password, Salt });

  regDocumentation.save().then(() =>
      res.status(201).send("created"))
      .catch((err) => res.status(500).send("Error: " + err))
}

exports.login = function (req, res) {
  const { Email, Password } = req.body;
  userModel.find({ Email, Password })
      .then((result) => {
          if (result.length > 0) {
            res.status(200).send("Logged in");
          }else{
            res.status(403).send("Your Email or password is not correct");
          }
          // console.log(result);
      })
      .catch((err) => {
          res.status(403).send("Your Email or password is not correct");
      });
}
