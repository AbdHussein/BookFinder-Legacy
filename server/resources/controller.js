const {
        BooksModel,    
        LoginModel,
        ReadModel,
        RegModel,
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
  FavBooksModel.find({})
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
}

exports.readBook = function(req, res){

  const { title, dateOfPublication , img } = req.body;

  let readDoc = new ReadModel({
    title,
    dateOfPublication,
    img,
  });
 readDoc
    .save()
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
  BooksModel.find({})
  .deleteOne({}).then((result)=>{
    res.send("DeleteOne");
  })
  .catch((err)=>{
    res.send(err)
  })
}

exports.removeRead = function(req,res){
  ReadModel.find({})
  .deleteOne({}).then((result)=>{
    res.send("DeleteOne");
  })
  .catch((err)=>{
    res.send(err)
  })
}

exports.register = function (req, res){

  const { FirstName, LastName, Email, Password } = req.body;
  let regDocumentation = new RegModel({ FirstName, LastName, Email, Password });

  regDocumentation.save().then(() =>
      res.status(201).send("created"))
      .catch((err) => res.status(500).send(err + "err"))
}

exports.login = function (req, res) {

  const { Email, Password } = req.params;

  var email = req.body.Email;
  var password = req.body.Password;

  RegModel.find({ Email, Password })
      .then((result) => {
          if (result.length > 0) {
              res.send(true);
          }else{
              res.send(false);
          }
          console.log(result);
      })
      .catch((err) => {
          res.send(err);
      });
}
